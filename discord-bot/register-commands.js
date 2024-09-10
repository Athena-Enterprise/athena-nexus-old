const { REST, Routes } = require('discord.js');
const fs = require('fs');
require('dotenv').config(); // Load environment variables

const commands = [];

// Load all command files from the commands directory
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push({
        name: command.name,
        description: command.description,
    });
}

// Create REST instance and deploy the commands
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID), // Global registration
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
