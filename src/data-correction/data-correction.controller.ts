import { UserData } from '../shared/models/user-data.model';
import { get } from '../shared/services/request.service';
import { correctData } from './services/data-corrector.service';
import { exportAsJson, uploadDataToKrat } from './services/data-exporter.service';

export async function start() {
    try {
        const informations = await get(`${process.env.END_POINT}informations.json`);
        exportAsJson(informations, 'informations');

        const jobs = await get(`${process.env.END_POINT}jobs.json`);
        exportAsJson(jobs, 'jobs');

        const users = await get(`${process.env.END_POINT}users.json`);
        exportAsJson(users, 'users');

        const correctedData = correctData(informations, jobs, users);
        exportAsJson(correctedData, 'results');
        await uploadDataToKrat(correctedData);
    } catch (error) {
        console.error(error);
    }
}

/**
 * fetches the jsons files from the server
 * @return {UserData}
 */
export function getJsonFiles(): UserData {
    const data = {} as UserData;
    const files = ['informations', 'jobs', 'users'];
    try {
        files.forEach(async (fileName) => {
            data[fileName] = await get(`${process.env.END_POINT}${fileName}.json`);
        });
    } catch (error) {
        console.error(error);
    }
    return data;
}
