const removeFromArray = function(array, ...itemsToRemove) {
    for (const arg of itemsToRemove) {
        array = array.filter((element) => element !== arg);
    }
    return array;

    // Alternative direction (short form)
    // return array.filter((element) => !itemsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
