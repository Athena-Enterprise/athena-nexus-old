module.exports = {
    name: 'serverstats',
    description: 'Displays server stats',
    async execute(interaction) {
        const { guild } = interaction; // Fetch the guild where the command is executed
        await interaction.reply(`Server name: ${guild.name}, Members: ${guild.memberCount}`);
    },
};
