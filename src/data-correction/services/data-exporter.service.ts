import * as fs from 'fs';
import path from 'path';
import { post } from '../../shared/services/request.service';

/**
 * Exports a json data to a json file
 * @param data {*}
 * @param fileName {string}
 */
export function exportAsJson(data: any, fileName: string): void {
    const outputUrl = path.join(__dirname, '../../../data/exported');
    if (!fs.existsSync(outputUrl)) {
        fs.mkdirSync(outputUrl, {recursive: true});
    }
    fs.writeFileSync(`${outputUrl}/${fileName}.json`, JSON.stringify(data));
    console.log(`          > File exported successfully in  ${outputUrl}/${fileName}.json`);
}

/**
 * Uploads data to krat server
 * @param data {object}
 * @returns {Promise<void>}
 */
export async function uploadDataToKrat(data: any): Promise<void> {
    await post(`${process.env.KRAT_URL}/${process.env.KRAT_ID}`, data);
    console.log(`          > File uploaded successfully to  ${process.env.KRAT_URL}/${process.env.KRAT_ID}`);
}

/**
 *
 * @param data {*}
 */
export function exportedAsAnOtherFormat(data) {

}
