import axios from 'axios';

/*
    The goal of this service is to add a layer on the library used to make http calls
    This enables us to change the library easily in the app by editing one file
 */

/**
 *
 * @param url {string}
 * @returns {Promise<*>}
 */
export async function get<T>(url: string): Promise<T | string> {
    try {
        const {data} = await axios.get<T>(
            url,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.message;
        } else {
            return 'An unexpected error occurred';
        }
    }
}

/**
 *
 * @param url {string}
 * @param body {*}
 * @returns {Promise<*>}
 */
export async function post<T>(url: string, body: any): Promise<T | string> {
    try {
        const {data} = await axios.post<T>(
            url,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.message;
        } else {
            return 'An unexpected error occurred';
        }
    }
}
