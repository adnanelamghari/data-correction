const assert = require("assert");
const DataCorrectorHelper = require("../src/helpers/data-corrector.helper");
const ENV = require("../env");
const RequestHelper = require("../src/helpers/request.helper");
const fs = require('fs');

describe('DataCorrectorHelper', () => {
    const dataCorrectorHelper = new DataCorrectorHelper();

    it('should be truthy', () => {
        assert(dataCorrectorHelper);
    });

    describe('correctName', () => {
        describe('Given a name that contain a vowel', () => {
            it('should correct the vowel', () => {
                assert.strictEqual(dataCorrectorHelper.correctName('V1nc3nt'), 'Vincent');
            });
        })

        describe('Given a name that contain multiple vowels', () => {
            it('should correct the vowels', () => {
                assert.strictEqual(dataCorrectorHelper.correctName('L4etit14'), 'Laetitia');
            });
        })

        describe('Given a name that doent contain a vowel', () => {
            it('should return the same name', () => {
                assert.strictEqual(dataCorrectorHelper.correctName('Vincent'), 'Vincent');
            });
        })
    })

    describe('correctCity', () => {
        describe('Given a city that contain an upper case in the middle', () => {
            it('should correct the case', () => {
                assert.strictEqual(dataCorrectorHelper.correctCity('paRiS'), 'Paris');
            });
        })

        describe('Given a name that doent contain an upper case', () => {
            it('should return the same city', () => {
                assert.strictEqual(dataCorrectorHelper.correctCity('Paris'), 'Paris');
            });
        })
    })


    describe('correctData', () => {
        describe('Given shuffled data', () => {
            it('should sanitize the data', async () => {
                const requestHelper = new RequestHelper();
                const informations = await requestHelper.get(`${ENV.END_POINT}informations.json`);
                const jobs = await requestHelper.get(`${ENV.END_POINT}jobs.json`);
                const users = await requestHelper.get(`${ENV.END_POINT}users.json`);

                const correctData = JSON.parse(fs.readFileSync('data/source/results.json', 'utf8'));
                const correctedData = dataCorrectorHelper.correctData(informations, jobs, users);
                assert.deepEqual(correctData, correctedData);
            });
        })
    });
});
