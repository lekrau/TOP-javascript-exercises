const findTheOldest = function(peopleArray) {
    const sortedArray = peopleArray.sort((a, b) => {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        if (isNaN(aAge)) {
            aAge = new Date().getFullYear() - a.yearOfBirth;
        }
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (isNaN(bAge)) {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        } 
        return aAge - bAge;
    });
    const result = sortedArray[sortedArray.length - 1];
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
