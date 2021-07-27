/* eslint-disable indent */
const { myFilter } = require('../filter');


describe('myFilter', () => {

    it('filters out by callback', () => {

        const callBackFunction = (item) => item === 0;
        const actual = myFilter([1, 3, 5, 0, 9, 5], callBackFunction);
        const expected =  [0];

        expect(actual).toEqual(expected);
    });



});




