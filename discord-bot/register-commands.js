const { REST, Routes } = require('discord.js');
const fs = require('fs');
require('dotenv').config({ path: '/home/itzdusty/athena-nexus/.env' });
console.log('Active modules:', Object.keys(require.cache));

// Ensure the token and client ID are provided
if (!process.env.TOKEN) {
  console.error('Error: Discord bot token is missing in the environment variables.');
  process.exit(1);
}

if (!process.env.CLIENT_ID) {
  console.error('Error: Discord client ID is missing in the environment variables.');
  process.exit(1);
}

const commands = [];

// Load all command files from the commands directory
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push({
    name: command.name,
    description: command.description,
  });
}

// Log the loaded commands
console.log('Commands to be registered:', commands);

// Create REST instance and deploy the commands
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN.trim());

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    
    // Register commands globally
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID), // Global command registration
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error('Error registering commands:', error.message);
  }
})();
