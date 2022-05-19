
const credentials = require('../../config/credentials')
// common headers

class Utilities {
    destinyHeaders = () => {
        return {
            "X-API-Key": `${credentials.destiny.apiKey}`,
            "User-Agent": `${credentials.destiny.appName}/${credentials.destiny.appVersion} AppId/appIdNum (${credentials.destiny.contactEmail})`
        }
    }
}

module.exports = new Utilities();