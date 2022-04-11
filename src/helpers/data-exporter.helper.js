const fs = require('fs');

class DataExporterHelper {

    constructor() {

    }

    exportAsJson(data) {
        fs.writeFileSync('data/exported/result.json', JSON.stringify(data))
    }

    exportedAsAnOtherFormat(data) {

    }
}

module.exports = DataExporterHelper;
