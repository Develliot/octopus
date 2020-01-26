import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderNavLink } from '../';

it('renders the component properly with all of its props', () => {
    const wrapper: ShallowWrapper = shallow(
        <HeaderNavLink selected={false} title={'title'} to={'/page'} />
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders the component properly when selected', () => {
    const wrapper: ShallowWrapper = shallow(
        <HeaderNavLink selected={false} title={'title'} to={'/page'} />
    );
    expect(wrapper).toMatchSnapshot();
});
