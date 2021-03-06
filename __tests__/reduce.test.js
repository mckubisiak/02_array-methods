/* eslint-disable indent */
const { reduce } = require('../reduce');

describe('reduce', () => {

    it('takes array, callback and intial value to start an accumlator returning final  value of items', () => {

        const callBackFunction = (accumlator, item) => {
            return accumlator + item;
        };
        const actual = reduce([7, 8, 9, 10], callBackFunction);
        const expected =  34;
        expect(actual).toEqual(expected);
    });

    it('takes array, callback and intial value to start an accumlator returning final  value of items', () => {

        const callBackFunction = (accumlator, item) => {
            return accumlator + item;
        };
        const actual = reduce([1, 2, 3], callBackFunction, 40);
        const expected =  46;
        expect(actual).toEqual(expected);
    });

});




