const palindromes = function (string) {
    const lowercase = string.toLowerCase();
    const regExp = /[^a-z0-9]/g;
    const clean = lowercase.replaceAll(regExp, "");
    const reverse = reverseString(clean);
    return reverse === clean;
};

const reverseString = string => {
    const array = string.split("");
    const reverseArray = array.reverse();
    return reverseArray.join("");
}

// Do not edit below this line
module.exports = palindromes;
