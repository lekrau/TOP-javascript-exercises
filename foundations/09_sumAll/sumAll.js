const sumAll = function(boundary1, boundary2) {
    if (boundary1 < 0 || boundary2 < 0 || !Number.isInteger(boundary1) || !Number.isInteger(boundary2)) {
        return "ERROR";
    }
    let result = 0;
    const lowerBound = Math.min(boundary1, boundary2);
    const upperBound = Math.max(boundary1, boundary2);
    for (let i = lowerBound; i <= upperBound; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
