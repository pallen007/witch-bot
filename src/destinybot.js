// Setup our environment variables via dotenv
// require('dotenv').config()
// const _ = require('lodash')
import { Credentials } from '../config/credentials.js'
import * as _retrieve from './actions/retrieve-destiny.js'
import * as database from './utils/database-ops.js'
// Import relevant classes from discord.js
import { Client, Intents } from 'discord.js'


// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);

// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`)
    // refresh the database when the app starts up
    database.refreshDb()
})

client.on('messageCreate',
    async function(msg){
        if(msg.content === "status"){
            await msg.reply("Wildin'")
        }

        if(msg.content == "get"){
            // console.log(_retrieve.getVendorItems())
            await msg.reply("Got 'em")
        }

        if(msg.content == "refresh"){
            database.refreshDb()
            await msg.reply("Your database is refreshed and restored")
        }

    })

// Authenticate
client.login(Credentials.discord.botToken)