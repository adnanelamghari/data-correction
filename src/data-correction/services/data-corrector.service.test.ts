import * as assert from 'assert';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';
import { get } from '../../shared/services/request.service';
import { correctCity, correctData, correctName } from './data-corrector.service';

describe('DataCorrectorService', () => {
    before(() => {
        const dotEnvPath = path.join(__dirname, '../../../test.env');
        dotenv.config({path: dotEnvPath});
    });
    describe('correctName', () => {
        describe('Given a name that contain a vowel', () => {
            it('should correct the vowel', () => {
                assert.strictEqual(correctName('V1nc3nt'), 'Vincent');
            });
        });

        describe('Given a name that contain multiple vowels', () => {
            it('should correct the vowels', () => {
                assert.strictEqual(correctName('L4etit14'), 'Laetitia');
            });
        });

        describe('Given a name that doent contain a vowel', () => {
            it('should return the same name', () => {
                assert.strictEqual(correctName('Vincent'), 'Vincent');
            });
        });
    });

    describe('correctCity', () => {
        describe('Given a city that contain an upper case in the middle', () => {
            it('should correct the case', () => {
                assert.strictEqual(correctCity('paRiS'), 'Paris');
            });
        });

        describe('Given a name that doent contain an upper case', () => {
            it('should return the same city', () => {
                assert.strictEqual(correctCity('Paris'), 'Paris');
            });
        });
    });

    describe('correctData', () => {
        describe('Given shuffled data', () => {
            it('should sanitize the data', async () => {
                const informations = await get(`${process.env.END_POINT}informations.json`);
                const jobs = await get(`${process.env.END_POINT}jobs.json`);
                const users = await get(`${process.env.END_POINT}users.json`);

                const correctedData = JSON.parse(fs.readFileSync('data/source/results.json', 'utf8'));
                const fixedData = correctData(informations, jobs, users);
                assert.deepEqual(correctedData, fixedData);
            });
        });
    });
});
