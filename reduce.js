/* eslint-disable indent */
const reduce = (arr, callback, intialValue) => {
    if(!(intialValue)) {
        let accumlator = arr[0];
        for (let index = 1; index < arr.length; index++) {
        const item = arr[index];
        accumlator = callback(accumlator, item);
    }
    return accumlator;
    }
};
module.exports = { reduce };


