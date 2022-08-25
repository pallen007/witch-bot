import * as retrieve from'../actions/retrieve-destiny.js'
import { Credentials } from '../../config/credentials.js'
// import { pathToFileURL } from 'url'
import fs from 'fs'
// import { ModalBuilder } from '@discordjs/builders'

// TODO: Implement SQLite here for a database?
let db = null

export const refreshDb = () => {
        retrieve.refreshManifest().then( () => {
            // db = import(Credentials.destiny.manifestLocation)
            db = fs.readFileSync(Credentials.destiny.aggregateManifest)
            console.log("done refreshing")
        })
    }

const lookup = (itemType, itemHash) => {}

export const lookupItem = (itemHash) => {}
export const lookupArmor = (itemHash) => {}
export const lookupWeapon = (itemHash) => {}
export const lookupInstancedItem = (itemHash) => {}
export const lookupInstancedWeapon = (itemHash) => {}
export const lookupInstancedArmor = (itemHash) => {}

    // lookup operations to parse through manifest and match up hashes from api queries


