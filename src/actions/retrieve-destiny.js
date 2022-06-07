
const config = require('../../config/credentials')
const fetch = require('node-fetch')
const _headers = require('../utils/headers')
const fs = require('fs')

class DestinyRetrieve {

    refreshManifest = () => {
        try{
            fetch(
                `${config.destiny.rootPath}/Manifest`,
                {
                    method: 'GET',
                    headers: { ..._headers.destinyHeaders() }
                }).then(resp => { 

                    fetch(
                        `${config.destiny.rootPath}${resp.jsonWorldContentPaths.en}`,
                        {
                            method: 'GET',
                            headers: { ..._headers.destinyHeaders() }
                        }
                    ).then( content => {
                        fs.writeFileSync(config.destiny.manifestLocation, content)
                        return config.destiny.manifestLocation
                    })
                }
            )
        } catch {
            err => {throw new Error(err)}
        }
    }
    getVendorItems = () => {
        try {
            fetch(
                `${config.destiny.rootPath}/Vendors?components=Vendors,VendorSales`,
                {
                    method: 'GET',
                    headers: { ..._headers.destinyHeaders() }
                }
            ).then(res => {return res})
        }
        catch (err) {
            throw new Error(err)
        }
    }

    getGunsmithItems = () => {
        try {
            fetch(
                `${config.destiny.rootPath}/Vendors?components=Vendors,VendorSales`,
                {
                    method: 'GET',
                    headers: { ..._headers.destinyHeaders() }
                }
            ).then(res => {return res})
        }
        catch (err) {
            throw new Error(err)
        }
    }
}

module.exports = new DestinyRetrieve()