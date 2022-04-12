const fs = require('fs');

class DataExporterHelper {

    constructor() {

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
     *
     * @param data {*}
     */
    exportedAsAnOtherFormat(data) {

    }
}

module.exports = DataExporterHelper;
