import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidemenu from './Sidemenu';

it('renders correctly', () => {
    const props = { 
        userActions: {},
        user: {}
    };

    const wrapper = shallow(<Sidemenu {...props} />, {mode: 'shallow'})
    expect(toJson(wrapper)).toMatchSnapshot();
});