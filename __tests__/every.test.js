/* eslint-disable indent */
const { every } = require('../every');

describe('every', () => {

    it('Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value', () => {

        const callBackFunction = (item) => item === 5;
        const actual = every([1, 3, 5, 0, 9, 5], callBackFunction);
        const expected =  false;

        expect(actual).toEqual(expected);
    });

});




