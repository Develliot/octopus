import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ColorBlock } from '../';

it('renders correctly with children', () => {
    const wrapper: ShallowWrapper = shallow(
        <ColorBlock>
            <div>Hello</div>
            <div>World</div>
        </ColorBlock>
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders correctly a set color', () => {
    const wrapper: ShallowWrapper = shallow(
        <ColorBlock color='pink'>
            <div>Hello</div>
            <div>World</div>
        </ColorBlock>
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders without padding', () => {
    const wrapper: ShallowWrapper = shallow(
        <ColorBlock padding={false}>
            <div>Hello</div>
            <div>World</div>
        </ColorBlock>
    );
    expect(wrapper).toMatchSnapshot();
});
