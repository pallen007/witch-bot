import * as retrieve from'../actions/retrieve-destiny.js'
import { Credentials } from '../../config/credentials.js'
// import { pathToFileURL } from 'url'
import * as fs from 'fs/promises'
// import { ModalBuilder } from '@discordjs/builders'

// TODO: Implement SQLite here for a database?
let db = null

export const refreshDb = async() => {
        await retrieve.refreshManifest()
        // .then( () => {
        //     fs.access(Credentials.destiny.aggregateManifest, fs.F_OK, (err) => {
        //         if (err) {
        //           throw new Error(err)
        //         }
        //       })
        //       console.log("Downloaded")
        // })
    }

const lookup = (itemType, itemHash) => {}


export const lookupItem = (itemHash) => {}
export const lookupArmor = (itemHash) => {}
export const lookupWeapon = (itemHash) => {}
export const lookupInstancedItem = (itemHash) => {}
export const lookupInstancedWeapon = (itemHash) => {}
export const lookupInstancedArmor = (itemHash) => {}

    // lookup operations to parse through manifest and match up hashes from api queries


