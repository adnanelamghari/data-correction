const https = require('https');

class RequestHelper {

    constructor() {
    }

    get(url) {
        return new Promise((resolve, reject) => {
            https.get(url, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            }).on("error", (error) => {
                reject(error);
            });
        });
    }
}

module.exports = RequestHelper;
