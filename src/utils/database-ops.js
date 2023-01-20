import * as retrieve from'../actions/retrieve-destiny.js'
import { Credentials } from '../../config/credentials.js'
import * as fs from 'fs'
import * as _headers from "../utils/headers.js";

// import { ModalBuilder } from '@discordjs/builders'

// TODO: Implement SQLite here for a database?
let db = null

export const refreshDb = async() => {
        await retrieve.downloadFile(`${Credentials.destiny.rootPath}${Credentials.destiny.apiManifestPath}`, {
          method: "GET",
          headers: { ..._headers.destinyHeaders() },
          credentials: "include"
        },
        Credentials.destiny.aggregateManifest)
        .then( () => {
            fs.access(Credentials.destiny.aggregateManifest, fs.F_OK, (err) => {
                if (err) {
                  throw new Error(err)
                }
              })
              console.log("Downloaded")
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


