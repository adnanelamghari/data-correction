const fs = require('fs');

class DataExporterHelper {

    constructor() {

    }

    exportAsJson(data, fileName) {
        const outputUrl = `data/exported/${fileName}.json`;
        fs.writeFileSync(outputUrl, JSON.stringify(data));
        console.log('          > File exported successfully in ' + outputUrl)
    }

    exportedAsAnOtherFormat(data) {

    }
}

module.exports = DataExporterHelper;
