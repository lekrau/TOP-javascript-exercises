const getTheTitles = function(bookArray) {
    // const titleArray = bookArray.reduce((result, book) => {
    //     result.push(book.title);
    //     return result;
    // }, []);
    const titleArray = bookArray.map(book => book.title);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
