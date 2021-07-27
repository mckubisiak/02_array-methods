/* eslint-disable indent */
const myFilter = (arr, callback) => {
    // const newArr = [];
    let newArr = [];
    
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if(callback(item) === true) {
        newArr = [...newArr, item];
    }
}
    return newArr;
};

module.exports = { myFilter };
