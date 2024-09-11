const { REST, Routes } = require('discord.js');
const fs = require('fs');
const { Pool } = require('pg'); // PostgreSQL driver
require('dotenv').config({ path: '/home/itzdusty/athena-nexus/.env' });

// PostgreSQL setup
const dbPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

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
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    // Register globally
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID), // Globally
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error('Error registering commands:', error);
  }
})();
