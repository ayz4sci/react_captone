import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from './TextInput';

it('renders correctly', () => {
    const props = { 
        name: "Lol",
        label: "lol",
        type: "text",
        onChange: jest.fn()
    };

    const wrapper = shallow(<TextInput {...props} />, {mode: 'shallow'})
    expect(toJson(wrapper)).toMatchSnapshot();
});