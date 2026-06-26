const findTheOldest = function(people) {
    const result = people.reduce((oldestPerson, currentPerson) => {
        const ageCurrent = getAge(currentPerson);
        const ageOldest = getAge(oldestPerson);
        if (ageCurrent > ageOldest) {
            return currentPerson;
        } else {
            return oldestPerson;
        }
    });
    return result;
};

const getAge = person => {
    if (person.yearOfDeath === undefined) {
        // Person is still alive
        const currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
