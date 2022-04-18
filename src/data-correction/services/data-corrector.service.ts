/**+
 * Sanitizes the given data
 * @param informations {object}
 * @param jobs {object}
 * @param users {object}
 * @returns {object}
 */
export function correctData(informations, jobs, users): any {
    const sanitizedData = {};
    Object.keys(users).forEach((userId) => {
        const user = users[userId];
        const userJob = jobs[userId];
        const userInformations = informations[userId];

        const name = user.name && user.name !== '#ERROR' ? user.name : (userJob?.name || userInformations?.name);
        const age = userInformations?.age ? userInformations.age : (userJob.age || user.age);
        const job = userJob?.job ? userJob.job : (userInformations.job || user.job);
        const city = userInformations?.city ? this.correctCity(userInformations.city) : undefined;

        sanitizedData[userId] = this.sanitizeObject({
            job: job,
            name: this.correctName(name),
            age: age,
            city: city
        });
    });
    return sanitizedData;
}

/**
 * Corrects the vowels (e by 3, a by 4, i by 1 and o by 0).
 * @param name {string} to be corrected
 * @returns {string}
 */
export function correctName(name: string): string {
    const fixedName = name
        .replace(/3/g, 'e')
        .replace(/4/g, 'a')
        .replace(/1/g, 'i')
        .replace(/0/g, 'o');
    return this.capitalize(fixedName);
}

/**
 * Corrects the city case
 * @param city {string}
 * @returns {string}
 */
export function correctCity(city: string): string {
    return this.capitalize(city.toLowerCase());
}

/**
 * Removes the null or undefined attributes from an object
 * @param object {object}
 * @returns {object}
 */
export function sanitizeObject(object: any): any {
    Object.keys(object).forEach(key => {
        if (!object[key]) {
            delete object[key];
        }
    });
    return object;
}

/**
 * Uppercase the first letter of a string
 * @param string {string}
 * @returns {string}
 */
export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}