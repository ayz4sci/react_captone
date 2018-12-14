import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchHeader from './SearchHeader';

it('renders correctly', () => {
    const props = { 
        loading: false,
        onSearchChange: jest.fn()
    };

    const wrapper = shallow(<SearchHeader {...props} />, {mode: 'shallow'})
    expect(toJson(wrapper)).toMatchSnapshot();
});