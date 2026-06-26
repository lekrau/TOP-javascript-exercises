const fibonacci = function(nthMember) {
    if (nthMember < 0) {
        return "OOPS";
    }
    const sequence = [0, 1];
    for (let i = 1; i < nthMember; i++) {
        sequence.push(sequence[i] + sequence[i - 1]);
    }
    return sequence[nthMember];
};

// Do not edit below this line
module.exports = fibonacci;
