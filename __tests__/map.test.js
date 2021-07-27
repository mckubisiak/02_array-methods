/* eslint-disable indent */
const { myMap } = require('../map');

describe('myMap', () => {

    it('TEXT takes an array and a function(STRING) to create a new array modified by the callback', () => {

        const callBackFunction = (item) => item + '! What did you say to me?';
        const actual = myMap(['PUNK', 'Mom', 'officer'], callBackFunction);
        const expected =  ['PUNK! What did you say to me?', 'Mom! What did you say to me?', 'officer! What did you say to me?'];

        expect(actual).toEqual(expected);
    });

    it('takes an array and a function(MATH) to create a new array modified by the callback', () => {

        const callBackFunction = (number) => number + 1;
        const actual = myMap([2, 3, 6], callBackFunction);
        const expected =  [3, 4, 7];

        expect(actual).toEqual(expected);
    });

});




