/* eslint-disable indent */
const myMap = (arr, callback) => {
    const newArr = [];
    let index = -1;
    
    for (const item of arr) {
        index++;
        if(!(item))
        newArr[index] = (item);
        else
        newArr[index] = callback(item);
    }
    return newArr;
};

module.exports = { myMap };
