import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ClipboardEnabledText from './ClipboardEnabledText';

it('renders correctly', () => {
    const props = { 
        content: "lol"
    };

    const wrapper = shallow(<ClipboardEnabledText {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot();
});