import { BasketReducer } from '../BasketReducer';

const mockProduct = {
    id: 1,
    title: 'Energy saving light bulb',
    wattage: 25,
    packetSize: 4,
    price: 12.99,
    description:
        'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches instantly, no wait around with a warm start and flicker free features. Light up your life with this swirly wonder!',
    imageUrl: 'https://picsum.photos/500/500',
    specifications: {
        brand: 'Philips',
        weight: '77g',
        dimensions: '12.6x6.2x6.2cm',
        modelNumber: 'E27 ES',
        colour: 'Cool daylight',
    },
};

const mockProduct2 = {
    id: 2,
    title: 'Incandescent light bulb',
    wattage: 40,
    packetSize: 2,
    price: 4.99,
    description:
        'Available in 40 watts, 60 watts, burn your retinas out with these retro looking bad boys, heat your room and empty your wallet as the same time. Sit back and remember the good old days when light bulbs would frequently pop.',
    imageUrl: 'https://picsum.photos/500/500',
    specifications: {
        brand: 'Acme',
        weight: '64g',
        dimensions: '10.6x6.2x6.2cm',
        modelNumber: 'E27 INC',
        colour: 'warm white',
    },
};

describe('BasketReducer', () => {
    it('adds a new products to an empty basket', () => {
        expect(
            BasketReducer(
                { basket: [] },
                {
                    type: 'addProducts',
                    payload: { product: mockProduct, value: 4 },
                }
            )
        ).toEqual({ basket: [{ product: mockProduct, quantity: 4 }] });
    });

    it('increments quantity by one if no quantity value is specified', () => {
        expect(
            BasketReducer(
                {
                    basket: [
                        { product: mockProduct, quantity: 4 },
                        { product: mockProduct2, quantity: 4 },
                    ],
                },
                { type: 'addProducts', payload: { product: mockProduct } }
            )
        ).toEqual({
            basket: [
                { product: mockProduct, quantity: 5 },
                { product: mockProduct2, quantity: 4 },
            ],
        });
    });

    it('it removes a set number of products from a basket', () => {
        expect(
            BasketReducer(
                {
                    basket: [
                        { product: mockProduct, quantity: 4 },
                        { product: mockProduct2, quantity: 4 },
                    ],
                },
                {
                    type: 'removeProducts',
                    payload: { product: mockProduct, value: 2 },
                }
            )
        ).toEqual({
            basket: [
                { product: mockProduct, quantity: 2 },
                { product: mockProduct2, quantity: 4 },
            ],
        });
    });

    it('it decrements quantity by one when no quantity value is specified', () => {
        expect(
            BasketReducer(
                {
                    basket: [
                        { product: mockProduct, quantity: 4 },
                        { product: mockProduct2, quantity: 4 },
                    ],
                },
                {
                    type: 'removeProducts',
                    payload: { product: mockProduct },
                }
            )
        ).toEqual({
            basket: [
                { product: mockProduct, quantity: 3 },
                { product: mockProduct2, quantity: 4 },
            ],
        });
    });

    it('it removes entire product entry from the basket when all exiting quantity is removed', () => {
        expect(
            BasketReducer(
                {
                    basket: [
                        { product: mockProduct, quantity: 4 },
                        { product: mockProduct2, quantity: 4 },
                    ],
                },
                {
                    type: 'removeProducts',
                    payload: { product: mockProduct, value: 4 },
                }
            )
        ).toEqual({
            basket: [{ product: mockProduct2, quantity: 4 }],
        });
    });

    it('it removes entire product entry from the basket when more than exiting quantity is removed', () => {
        expect(
            BasketReducer(
                {
                    basket: [
                        { product: mockProduct, quantity: 4 },
                        { product: mockProduct2, quantity: 4 },
                    ],
                },
                {
                    type: 'removeProducts',
                    payload: { product: mockProduct, value: 7 },
                }
            )
        ).toEqual({
            basket: [{ product: mockProduct2, quantity: 4 }],
        });
    });
});
