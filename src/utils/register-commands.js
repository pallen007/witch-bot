// import { REST } from '@discordjs/rest'
// import { Routes } from 'discord-api-types/v9'
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
// const { SlashCommandBuilder } = require('@discordjs/builders');

const createRequire = require('module')
const _ = require('lodash')
// const getFile = createRequire(import.meta.url)
const commands = require('../../config/commands')
const _credentials = require('../../config/credentials')


const rest = new REST({ version: '9' }).setToken('token');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(_credentials.discord.clientId, _credentials.discord.testGuildId),
      { body: commands.items }
    ).then( () => console.log('Successfully reloaded application (/) commands.'))
  } catch (error) {
    console.error(error);
  }
})();