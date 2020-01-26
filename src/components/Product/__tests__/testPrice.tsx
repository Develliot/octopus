import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Price } from '../Price';
import { Pence } from '../styles';

describe('Price', () => {
    it('renders correctly with price', () => {
        const wrapper: ShallowWrapper = shallow(<Price price={20.99} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly without pence', () => {
        const wrapper: ShallowWrapper = shallow(<Price price={20} />);
        expect(wrapper.find(Pence).text()).toEqual('.00');
    });

    it('rounds fractions down correctly', () => {
        const wrapper: ShallowWrapper = shallow(<Price price={20.339} />);
        expect(wrapper.find(Pence).text()).toEqual('.34');
    });
});
