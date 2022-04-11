const RequestHelper = require('./helpers/request.helper');
const ENV = require('../env');

class Controller {
    requestHelper;

    constructor() {
        this.requestHelper = new RequestHelper();
    }

    async start() {
        const informations = await this.requestHelper.get(`${ENV.END_POINT}informations.json`);
        const jobs = await this.requestHelper.get(`${ENV.END_POINT}jobs.json`);
        const users = await this.requestHelper.get(`${ENV.END_POINT}users.json`);
    }
}

module.exports = Controller;
