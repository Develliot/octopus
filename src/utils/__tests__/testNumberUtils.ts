import { scaleBetween } from '../NumberUtils';

describe('scaleBetween', () => {
    // unscaledNum: number,
    // minAllowed: number,
    // maxAllowed: number,
    // min: number,
    // max: number
    it('it rescales numbers correctly', () => {
        expect(scaleBetween(4, 0, 4, 0, 8)).toEqual(2);
        expect(scaleBetween(2, -1, 1, 0, 8)).toEqual(-0.5);
    });
});
