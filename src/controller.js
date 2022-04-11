const RequestHelper = require('./helpers/request.helper');
const DataExporterHelper = require('./helpers/data-exporter.helper');
const DataCorrectorHelper = require('./helpers/data-corrector.helper');
const ENV = require('../env');

class Controller {
    requestHelper;
    dataExporterHelper;
    dataCorrectorHelper;

    constructor() {
        this.requestHelper = new RequestHelper();
        this.dataExporterHelper = new DataExporterHelper();
        this.dataCorrectorHelper = new DataCorrectorHelper();
    }

    async start() {
        /*
                const files = ['informations', 'jobs', 'users'];
        files.forEach(async (fileName) => {
            const data = await this.requestHelper.get(`${ENV.END_POINT}${fileName}.json`);
            this.dataExporterHelper.exportAsJson(data, fileName);
        })

         */
        const informations = await this.requestHelper.get(`${ENV.END_POINT}informations.json`);
        this.dataExporterHelper.exportAsJson(informations, 'informations');

        const jobs = await this.requestHelper.get(`${ENV.END_POINT}jobs.json`);
        this.dataExporterHelper.exportAsJson(jobs, 'jobs');

        const users = await this.requestHelper.get(`${ENV.END_POINT}users.json`);
        this.dataExporterHelper.exportAsJson(users, 'users');

        const correctedData = this.dataCorrectorHelper.correctData(informations, jobs, users);
        this.dataExporterHelper.exportAsJson(correctedData, 'results');
    }
}

module.exports = Controller;
