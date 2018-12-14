import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoryCard from './CategoryCard';

it('renders correctly', () => {
    const props = { 
        category: {
            name: "lol",
            cheats: []
        }
    };

    const wrapper = shallow(<CategoryCard {...props} />, {mode: 'shallow'})
    expect(toJson(wrapper)).toMatchSnapshot();
});