class DataCorrectorHelper {

    constructor() {
    }

    /**+
     * Sanitizes the given data
     * @param informations {object}
     * @param jobs {object}
     * @param users {object}
     * @returns {object}
     */
    correctData(informations, jobs, users) {
        const sanitizedData = {};
        Object.keys(users).forEach((userId) => {
            const user = users[userId];
            const userJob = jobs[userId];
            const userInformations = informations[userId];

            const name = user.name && user.name !== '#ERROR' ? user.name : (userJob?.name || userInformations?.name);
            const age = userInformations?.age ? userInformations.age : (userJob.age || user.age);
            const city = userInformations?.city ? this.correctCity(userInformations.city) : undefined;

            sanitizedData[userId] = this.sanitizeObject({
                job: userJob ? userJob.job : undefined,
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
    correctName(name) {
        // replaceAll is now supported by popular browsers
        return name
            .replaceAll('3', 'e') // .replace(/3/g, 'e')
            .replaceAll('4', 'a')
            .replaceAll('1', 'i')
            .replaceAll('0', 'o');
    }

    /**
     * Corrects the city case
     * @param city {string}
     * @returns {string}
     */
    correctCity(city) {
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        return capitalize(city.toLowerCase());
    }

    /**
     * Removes the null or undefined attributes from an object
     * @param object {object}
     * @returns {object}
     */
    sanitizeObject(object) {
        Object.keys(object).forEach(key => {
            if (!object[key]) {
                delete object[key];
            }
        });
        return object;
    }
}

module.exports = DataCorrectorHelper;
