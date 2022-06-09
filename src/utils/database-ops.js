import { Credentials }  from '../../config/credentials.js'
import fs from 'fs'
import * as retrieve from'../actions/retrieve-destiny.js'
import { ModalBuilder } from '@discordjs/builders'



export class DbOps {

    #db;

    constructor () {
        if (fs.existsSync(Credentials.destiny.manifestLocation)){
            this.#db = require(Credentials.destiny.manifestLocation)
        } else {
            retrieve.refreshManifest().then( () => {
                console.log('past refresh call')
                this.#db = require(location)
            })
        }
    }

    refreshDb = () => {
        retrieve.refreshManifest().then( () => {
            console.log('past refresh call')
            this.#db = require(location)
        })
    }

    lookup = (itemType, itemHash) => {}

    lookupItem = (itemHash) => {}
    lookupArmor = (itemHash) => {}
    lookupWeapon = (itemHash) => {}
    lookupInstancedItem = (itemHash) => {}
    lookupInstancedWeapon = (itemHash) => {}
    lookupInstancedArmor = (itemHash) => {}

    // lookup operations to parse through manifest and match up hashes from api queries




}
