import { BasketReducer } from '../BasketReducer';

describe('BasketReducer', () => {
    it('adds a new products to an empty basket', () => {
        expect(
            BasketReducer(
                { basket: {} },
                { type: 'addProducts', payload: { id: 7, value: 4 } }
            )
        ).toEqual({ basket: { 7: 4 } });
    });

    it('adds a single products if no quantity value is specified', () => {
        expect(
            BasketReducer(
                { basket: {} },
                { type: 'addProducts', payload: { id: 7 } }
            )
        ).toEqual({ basket: { 7: 1 } });
    });

    it('it removes a set number of products from a basket', () => {
        expect(
            BasketReducer(
                { basket: { 3: 3 } },
                { type: 'removeProducts', payload: { id: 3, value: 2 } }
            )
        ).toEqual({ basket: { 3: 1 } });
    });

    it('it removes a single products from a basket when no quantity value is specified', () => {
        expect(
            BasketReducer(
                { basket: { 3: 3 } },
                { type: 'removeProducts', payload: { id: 3 } }
            )
        ).toEqual({ basket: { 3: 2 } });
    });

    it('it removes all products from the basket when requested', () => {
        expect(
            BasketReducer(
                { basket: { 3: 3 } },
                { type: 'removeProducts', payload: { id: 3, value: 3 } }
            )
        ).toEqual({ basket: {} });
    });

    it('it removes all the same products from the basket when a quantity greater than what exists is used', () => {
        expect(
            BasketReducer(
                { basket: { 3: 3, 5: 7 } },
                { type: 'removeProducts', payload: { id: 3, value: 7 } }
            )
        ).toEqual({ basket: { 5: 7 } });
    });
});
