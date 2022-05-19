const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Replies with bot status'),
	async execute(interaction) {
		await interaction.reply('Wildin');
	},
};