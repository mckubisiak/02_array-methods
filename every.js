/* eslint-disable indent */
const every = (arr, callback) => {

    
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        const newItem = callback(item);

        if(newItem) {
            return;
        } else return false;
    }
};
module.exports = { every };


