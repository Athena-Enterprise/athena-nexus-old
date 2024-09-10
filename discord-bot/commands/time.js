module.exports = {
    name: 'time',
    description: 'Replies with the current server time',
    async execute(interaction) {
        const currentTime = new Date().toLocaleTimeString();
        await interaction.reply(`Current server time: ${currentTime}`);
    },
};
