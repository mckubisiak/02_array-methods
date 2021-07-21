/* eslint-disable indent */
const { myMap } = require('../map');


describe('myMap', () => {

    it('takes an array and a function(callback) to create a new array modified by the callback', () => {

        const callBackFunction = (identifer) => identifer + '! What did you say to me?';
        const actual = myMap(['PUNK', 'Mom', 'officer'], callBackFunction);
        const expected =  ['PUNK! What did you say to me?', 'Mom! What did you say to me?', 'officer! What did you say to me?'];

        expect(actual).toEqual(expected);
    });
});




