const credentials = require('../../config/credentials');
const fs = require('fs')
const retrieve = require('../actions/retrieve-destiny')



class DbOps {

    #db;

    constructor () {
        if (fs.existsSync(credentials.destiny.manifestLocation)){
            this.#db = require(credentials.destiny.manifestLocation)
        } else {
            this.#db = require(retrieve.refreshManifest())
        }
    }

    refreshDb = () => {
        this.#db = require(retrieve.refreshManifest())
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

module.exports = new DbOps();
    
