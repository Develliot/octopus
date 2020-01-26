import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ProductOverview } from '../';
import { ProductType } from 'src/types';

describe('ProductOverview', () => {
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

    it('renders correctly with product', () => {
        const wrapper: ShallowWrapper = shallow(
            <ProductOverview product={mockProduct} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
