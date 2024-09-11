const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const { Pool } = require('pg');  // PostgreSQL driver
const fs = require('fs');
require('dotenv').config({ path: '/home/itzdusty/athena-nexus/.env' });

// PostgreSQL setup
const dbPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Store commands in a collection
client.commands = new Collection();
const allCommands = [];

// Load all command files from the commands directory
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  allCommands.push({
    name: command.name,
    description: command.description,
  });
}

// Register commands dynamically for each server
client.on('guildCreate', async (guild) => {
  try {
    // Fetch server-specific configuration from PostgreSQL
    const res = await dbPool.query('SELECT * FROM guild_config WHERE guild_id = $1', [guild.id]);
    const serverConfig = res.rows[0];

    // Filter commands based on the enabled commands for that server
    const enabledCommands = allCommands.filter(cmd => serverConfig.enabled_commands.includes(cmd.name));

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    console.log(`Registering commands for guild: ${guild.id}`);
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, guild.id), // Register commands for the specific guild
      { body: enabledCommands }
    );
    console.log(`Successfully registered commands for guild: ${guild.name}`);
  } catch (error) {
    console.error(`Error registering commands for guild: ${guild.name}`, error);
  }
});

// Bot ready event
client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
});

// Slash command interaction handling
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(process.env.TOKEN);
