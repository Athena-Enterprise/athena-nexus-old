const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config({ path: '/home/itzdusty/athena-nexus/.env' });

// Ensure the token exists
if (!process.env.TOKEN) {
  console.error('Error: Discord bot token is missing in the environment variables.');
  process.exit(1);
}

// Initialize the bot client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Store commands in a collection
client.commands = new Collection();

// Load all command files from the commands directory
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

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

client.login(process.env.TOKEN.trim());
