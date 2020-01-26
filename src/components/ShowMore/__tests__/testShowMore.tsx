import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ShowMore } from '../';
import { ShowMoreButton } from '../styles';

describe('ShowMore', () => {
    it('renders correctly', () => {
        const wrapper: ShallowWrapper = shallow(
            <ShowMore color='blue' closeHeight='4em' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('changes to the correct button text when toggle button clicked', () => {
        const wrapper: ShallowWrapper = shallow(
            <ShowMore color='blue' closeHeight='4em' />
        );
        expect(wrapper.find(ShowMoreButton).text()).toEqual('Show less');
        wrapper.find(ShowMoreButton).simulate('click');
        expect(wrapper.find(ShowMoreButton).text()).toEqual('Show more');
    });
});
