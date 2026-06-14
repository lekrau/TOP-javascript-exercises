const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        // Should I write this else? It has no effect
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
