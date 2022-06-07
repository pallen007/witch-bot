const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	// This may or may not be feasible. Gonna return to this after I have authentication figured out
	data: new SlashCommandBuilder()
		.setName('getVaultInv')
		.setDescription('Gets the vault inventory for an account'),
	async execute(interaction) {
		await interaction.reply('NotYetImplemented');
	},
};