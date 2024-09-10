const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login('MTI4MzA3MDk5NDk2NTA2OTg3OA.GnmtJY.0eZWdzzgolnStRhhqNhO0G657Hi7e7iCJ7DIG0');
