import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Footer } from '../';

it('renders the component properly', () => {
    const wrapper: ShallowWrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});
