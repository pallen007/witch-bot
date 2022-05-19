// Setup our environment variables via dotenv
// require('dotenv').config()
const _ = require('lodash')
const _credentials = require('../config/credentials')
const _retrieve = require('../src/actions/retrieve-destiny')
const { DbOps } = require('../src/utils/database-ops')
// Import relevant classes from discord.js
const { Client, Intents } = require('discord.js');


// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);

// download Destiny manifest if not already downloaded
const database = new DbOps()

// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`)
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

    })

// Authenticate
client.login(_credentials.discord.botToken)