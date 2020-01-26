import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button } from '../';

describe('Button', () => {
    it('renders correctly with children', () => {
        const wrapper: ShallowWrapper = shallow(
            <Button>
                <div>Hello</div>
                <div>World</div>
            </Button>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with a different color', () => {
        const wrapper: ShallowWrapper = shallow(
            <Button color='pink'>
                <div>Hello</div>
            </Button>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with isShiny set', () => {
        const wrapper: ShallowWrapper = shallow(
            <Button isShiny={true}>
                <div>Hello</div>
            </Button>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('works with a click handler', () => {
        const handleClick = jest.fn();
        const wrapper: ShallowWrapper = shallow(
            <Button color='pink' onClick={handleClick}>
                <div>Hello</div>
            </Button>
        );
        wrapper.simulate('click');
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
