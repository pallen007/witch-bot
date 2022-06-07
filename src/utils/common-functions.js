const crypto = require('crypto')
class Common {
        convertHash = (hash) => {
            return hash >> 32
        }

        generateAuthState = () => {
            // shamelessly stolen from https://gist.github.com/darrenmothersele/7cd24da0f35d450babd4745c7f208acf#file-random2-js
            const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let array = new Uint8Array(40);
            crypto.getRandomValues(array);
            array = array.map(x => validChars.charCodeAt(x % validChars.length));
            const randomState = String.fromCharCode.apply(null, array);
            console.log(randomState);
            return randomState;
        }

        authenticate = () => {
            stateCheck = this.generateAuthState();
            

        }
}

module.exports = new Common();