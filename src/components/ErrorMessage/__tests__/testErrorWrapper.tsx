import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ErrorMessage } from '../';
import { Button } from 'src/components/Button';

it('renders the with an error message', () => {
    const wrapper: ShallowWrapper = shallow(
        <ErrorMessage errorMessage='This is an error message' />
    );
    expect(wrapper).toMatchSnapshot();
});

it('renders the with a retry button', () => {
    const mockRetry = jest.fn();
    const wrapper: ShallowWrapper = shallow(
        <ErrorMessage
            errorMessage='This is an error message'
            retry={mockRetry}
        />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Button)).toHaveLength(2);
    wrapper
        .findWhere(
            element => element.type() === Button && element.contains('Retry')
        )
        .simulate('click');
    expect(mockRetry).toHaveBeenCalledTimes(1);
});
