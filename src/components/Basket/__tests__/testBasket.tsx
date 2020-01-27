import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Basket, basketTotal } from '../';
import { ProductType } from 'src/types';

describe('Basket', () => {
    const mockProduct: ProductType = {
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

    const mockProduct2: ProductType = {
        id: 2,
        title: 'Energy saving light bulb',
        wattage: 25,
        packetSize: 4,
        price: 3.0,
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

    it('renders correctly with basket items', () => {
        const wrapper: ShallowWrapper = shallow(
            <Basket basket={[{ product: mockProduct, quantity: 1 }]} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('basketTotal reducer function calculates the correct values', () => {
        expect(basketTotal([{ product: mockProduct, quantity: 1 }])).toEqual(
            12.99
        );
        expect(basketTotal([{ product: mockProduct, quantity: 3 }])).toEqual(
            38.97
        );
        expect(
            basketTotal([
                { product: mockProduct, quantity: 3 },
                { product: mockProduct2, quantity: 3 },
            ])
        ).toEqual(47.97);
    });
});
