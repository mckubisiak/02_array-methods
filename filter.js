/* eslint-disable indent */
const myFilter = (arr, callback) => {
    // const newArr = [];
    let newArr = [];
    
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if(callback(item) === true) {
        // newArr[index] = (item);
        newArr = [...newArr, item];
    }
}
console.log(newArr);
    return newArr;
};

module.exports = { myFilter };
