import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { QuantityCounter } from '../';
import { CounterButton, CounterValue } from '../styles';

// not much point testing not visible because snapshot
// won't capture changes in styled component
describe('QuantityCounter', () => {
    it('renders correctly', () => {
        const mockOnChangeHandler = jest.fn();
        const wrapper: ShallowWrapper = shallow(
            <QuantityCounter minValue={1} onChange={mockOnChangeHandler} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('when value changes onChangeHandlerFires with the correct value', () => {
        const mockOnChangeHandler = jest.fn();
        const wrapper: ShallowWrapper = shallow(
            <QuantityCounter minValue={1} onChange={mockOnChangeHandler} />
        );

        wrapper
            .find(CounterButton)
            .at(1)
            .simulate('click');

        expect(wrapper.find(CounterValue).text()).toEqual('2');
        expect(mockOnChangeHandler).toHaveBeenCalledWith(2);

        wrapper
            .find(CounterButton)
            .at(0)
            .simulate('click');
        expect(wrapper.find(CounterValue).text()).toEqual('1');
        expect(mockOnChangeHandler).toHaveBeenCalledWith(1);
    });

    it('wont change the value below the minimum threshold', () => {
        const mockOnChangeHandler = jest.fn();
        const wrapper: ShallowWrapper = shallow(
            <QuantityCounter minValue={1} onChange={mockOnChangeHandler} />
        );

        wrapper
            .find(CounterButton)
            .at(0)
            .simulate('click');
        expect(wrapper.find(CounterValue).text()).toEqual('1');
        expect(mockOnChangeHandler).toHaveBeenCalledWith(1);
    });
});
