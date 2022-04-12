const https = require('https');

class RequestHelper {

    constructor() {
    }

    /**
     *
     * @param url {string}
     * @returns {Promise<*>}
     */
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

    /**
     *
     * @param url {string}
     * @param data {*}
     * @returns {Promise<*>}
     */
    post(url, data) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            https.request(options, (resp) => {
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
