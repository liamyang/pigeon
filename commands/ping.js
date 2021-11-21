const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('See the Pigeon\'s latency'),
	async execute(interaction) {
		return interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
	},
};
