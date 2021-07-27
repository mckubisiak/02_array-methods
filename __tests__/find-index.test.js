/* eslint-disable indent */
const { findIndex } = require('../find-index');


describe('findIndex', () => {

    it('finds index of first truthy item', () => {

        const callBackFunction = (item) => item === 5;
        const actual = findIndex([1, 3, 5, 0, 9, 5], callBackFunction);
        const expected =  2;

        expect(actual).toEqual(expected);
    });

    it('finds index of first truthy itemt', () => {

        const callBackFunction = (item) => item === 9;
        const actual = findIndex([1, 3, 5, 0, 9, 5], callBackFunction);
        const expected =  4;

        expect(actual).toEqual(expected);
    });

});




