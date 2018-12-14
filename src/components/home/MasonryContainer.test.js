import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import MasonryContainer from './MasonryContainer';

it('renders correctly', () => {
    const props = { 
        categories: [{
            name: "lol",
            cheats: [{
                description: "lola",
                command: "lola la"
            }]
        }]
    };

    const wrapper = shallow(<MasonryContainer {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot();
});