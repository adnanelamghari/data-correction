const assert = require("assert");
const DataCorrectorHelper = require("../src/helpers/data-corrector.helper");

describe('DataCorrectorHelper', () => {
    it('should be truthy', () => {
        const dataCorrectorHelper = new DataCorrectorHelper();
        assert(dataCorrectorHelper);
    });

    describe('correctName', () => {
        describe('Given a name that contain a vowel', () => {
            it('should correct the vowel', () => {
                const dataCorrectorHelper = new DataCorrectorHelper();
                assert.strictEqual(dataCorrectorHelper.correctName('V1nc3nt'), 'Vincent');
            });
        })

        describe('Given a name that contain multiple vowels', () => {
            it('should correct the vowels', () => {
                const dataCorrectorHelper = new DataCorrectorHelper();
                assert.strictEqual(dataCorrectorHelper.correctName('L4etit14'), 'Laetitia');
            });
        })

        describe('Given a name that doent contain a vowel', () => {
            it('should return the same name', () => {
                const dataCorrectorHelper = new DataCorrectorHelper();
                assert.strictEqual(dataCorrectorHelper.correctName('Vincent'), 'Vincent');
            });
        })
    })

    describe('correctCity', () => {
        describe('Given a city that contain an upper case in the middle', () => {
            it('should correct the case', () => {
                const dataCorrectorHelper = new DataCorrectorHelper();
                assert.strictEqual(dataCorrectorHelper.correctCity('paRiS'), 'Paris');
            });
        })

        describe('Given a name that doent contain an upper case', () => {
            it('should return the same city', () => {
                const dataCorrectorHelper = new DataCorrectorHelper();
                assert.strictEqual(dataCorrectorHelper.correctCity('Paris'), 'Paris');
            });
        })
    })
});
