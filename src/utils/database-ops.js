const credentials = require('../../config/credentials');
const fs = require('fs')
const retrieve = require('../actions/retrieve-destiny')



class DbOps {

    #db;

    constructor () {
        if (fs.existsSync(credentials.destiny.manifestLocation)){
            this.#db = require(credentials.destiny.manifestLocation)
        } else {
            retrieve.refreshManifest().then(res => {
                if (res) {
                    this.#db = require(credentials.destiny.manifestLocation)
                } 
            })
        }
    }

    refreshDb = () => {
        this.#db = null
        retrieve.refreshManifest().then(res => {
            if (res) {
                this.#db = require(credentials.destiny.manifestLocation)
            } 
        })
    }

    // lookup operations to parse through manifest and match up hashes from api queries




}

module.exports = new DbOps();
    
