/* eslint-disable indent */
const myMap = (arr, callback) => {
    const newArr = [];
    let index = 0;
    
    for (const item of arr) {
        if(!(item))
        newArr[index] = (item);
        else
        newArr[index] = callback(item);
        index++;
    }
    return newArr;
};

module.exports = { myMap };
