/* eslint-disable indent */
const myMap = (arr, callback) => {
    const newArr = [];
    let j = -1;
    
    for (const i of arr) {
        j++;
        if(!(i))
        newArr[j] = (i);
        else
        newArr[j] = callback(i);
    }
    return newArr;
};

module.exports = { myMap };
