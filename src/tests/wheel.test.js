// Libs
import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Components
import Wheel from '../components/Wheel';

describe('test for <Wheel /> wrapper', () => {

    it('allows to set and test different props', () => {
        
        // Red prop is passed
        const wrapper = mount(<Wheel color="red" />);
        expect(wrapper.props().color).to.equal('red');
        expect(wrapper.text()).to.equal('RED');
        
        // Blue prop is passed
        wrapper.setProps({ color: 'blue' });
        expect(wrapper.props().color).to.equal('blue');
        expect(wrapper.text()).to.equal('BLUE');
        
        // Green prop is passed
        wrapper.setProps({ color: 'green' });
        expect(wrapper.props().color).to.equal('green');
        expect(wrapper.text()).to.equal('GREEN');
        
        // Yellow prop is passed
        wrapper.setProps({ color: 'yellow' });
        expect(wrapper.props().color).to.equal('yellow');
        expect(wrapper.text()).to.equal('YELLOW');
    });
});