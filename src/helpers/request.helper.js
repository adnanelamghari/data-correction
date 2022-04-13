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
            }).on("error", reject);
        });
    }

    /**
     *
     * @param host {string}
     * @param path {string}
     * @param data {*}
     * @returns {Promise<*>}
     */
    post(host, path, data) {
        return new Promise((resolve, reject) => {
            /**
             * Removes the protocol from an url
             * @param url {string}
             * @returns {string}
             */
            const removeProtocolFromUrl = (url) => {
                return url.replace(/(^\w+:|^)\/\//, '');
            }
            const options = {
                host: removeProtocolFromUrl(host),
                path: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            let dataAsString = JSON.stringify(data);
            const req = https.request(options, (res) => {
                    let buffers = [];
                    res.on('error', reject);
                    res.on('data', buffer => buffers.push(buffer));
                    res.on('end', () => {
                        res.statusCode === 200 ? resolve(Buffer.concat(buffers)) : reject(Buffer.concat(buffers))
                    });
                }
            );
            req.write(dataAsString);
            req.end();
        });
    }
}

module.exports = RequestHelper;
