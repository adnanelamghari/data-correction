const fs = require('fs');
const ENV = require("../../env");
const RequestHelper = require("./request.helper");

class DataExporterHelper {
    requestHelper;

    constructor() {
        this.requestHelper = new RequestHelper();
    }

    /**
     * Exports a json data to a json file
     * @param data {*}
     * @param fileName {string}
     */
    exportAsJson(data, fileName) {
        const outputUrl = `data/exported/${fileName}.json`;
        fs.writeFileSync(outputUrl, JSON.stringify(data));
        console.log('          > File exported successfully in ' + outputUrl)
    }

    /**
     * Uploads data to krat server
     * @param data {object}
     * @returns {Promise<void>}
     */
    async uploadDataToKrat(data) {
        await this.requestHelper.post(ENV.KRAT_URL, `/${ENV.KRAT_ID}`, data);
        console.log(`          > File uploaded successfully to  ${ENV.KRAT_URL}/${ENV.KRAT_ID}`);
    }

    /**
     *
     * @param data {*}
     */
    exportedAsAnOtherFormat(data) {

    }
}

module.exports = DataExporterHelper;
