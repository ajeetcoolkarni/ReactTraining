import React from 'react';
import {shallow} from 'enzyme';
import {Api} from './components/api';

const props = {
    name:'ajeet'
}

it('renders the element',()=>{
    const element = shallow(<Api {...props}/>)
    expect(element).toBeTrue();
})