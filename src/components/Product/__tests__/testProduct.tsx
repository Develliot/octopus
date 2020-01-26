import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Product } from '../';
import { Button } from 'src/components/Button';
import { Paragraph } from 'src/components/Typography';

import { ProductType } from 'src/types';
import * as BasketContext from 'src/contexts/BasketContext';

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

describe('Product', () => {
    it('renders correctly with product', () => {
        const wrapper: ShallowWrapper = shallow(
            <Product product={mockProduct} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('displays when an item has been added to cart', () => {
        const wrapper: ShallowWrapper = shallow(
            <Product product={mockProduct} />
        );
        wrapper.find(Button).simulate('click');
        expect(
            wrapper
                .find(Paragraph)
                .at(1)
                .text()
        ).toContain('...added to basket');
    });

    it('sends data to the store when add to basked its clicked', () => {
        const contextValues: BasketContext.BasketContextStateType = {
            basket: [{ product: mockProduct, quantity: 3 }],
        };

        const dispatch = jest.fn();

        jest.spyOn(BasketContext, 'useBasketContext').mockImplementation(() => {
            return [contextValues, dispatch];
        });

        const wrapper: ShallowWrapper = shallow(
            <Product product={mockProduct} />
        );
        wrapper.find(Button).simulate('click');
        expect(dispatch).toHaveBeenCalledWith({
            basket: [{ product: mockProduct, quantity: 4 }],
        });
    });
});
