/* eslint-disable indent */
const { findIndex } = require('../find-index');


describe('findIndex', () => {

    it('filters out', () => {

        const callBackFunction = (identifer) => identifer === 5;
        const actual = findIndex([1, 3, 5, 0, 9, 5], callBackFunction);
        const expected =  5;

        expect(actual).toEqual(expected);
    });

    it('filters out', () => {

        const callBackFunction = (identifer) => identifer === 9;
        const actual = findIndex([1, 3, 5, 0, 9, 5], callBackFunction);
        const expected =  9;

        expect(actual).toEqual(expected);
    });

});




