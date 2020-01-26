import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '../';
import { ResponsiveSpacer } from '../styles';
import { MenuButton } from '../MenuButton';

// not much point testing not visible because snapshot
// won't capture changes in styled component
describe('Header', () => {
    it('renders visible', () => {
        const wrapper: ShallowWrapper = shallow(
            <Header currentRoute='/' visible={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('changes menu open var when button clicked', () => {
        const wrapper: ShallowWrapper = shallow(
            <Header currentRoute='/' visible={true} />
        );

        expect(wrapper.find(ResponsiveSpacer).props().menuOpen).toEqual(false);
        wrapper.find(MenuButton).simulate('click');
        expect(wrapper.find(ResponsiveSpacer).props().menuOpen).toEqual(true);
        wrapper.find(MenuButton).simulate('click');
        expect(wrapper.find(ResponsiveSpacer).props().menuOpen).toEqual(false);
    });
});
