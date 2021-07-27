/* eslint-disable indent */
const findIndex = (arr, callback) => {
    
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if(callback(item) === true) {
        return arr[index];
        }
    }
};

module.exports = { findIndex };
