import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Cheat from './Cheat';

it('renders correctly', () => {
    const props = { 
        cheat: {
            description: "Lol",
            command: "git command",
            keywords: []
        }
    };

    const wrapper = shallow(<Cheat {...props} />, {mode: 'shallow'})
    expect(toJson(wrapper)).toMatchSnapshot();
});