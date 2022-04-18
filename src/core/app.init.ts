import { start } from '../data-correction/data-correction.controller';

/**
 * Initialize the app
 */
export async function initApp(): Promise<void> {
    console.log('Starting server ..');
    await start();
}
