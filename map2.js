/* eslint-disable indent */
const myMap2 = (arr, callback) => {
    const newArr = [];
    
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if(!(item))
        newArr[index] = (item);
        else
        newArr[index] = callback(item);
    }
    return newArr;
};

module.exports = { myMap2 };
