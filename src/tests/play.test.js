// Libs
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

// Components
import Play from '../components/play';

describe('tests for <Play> container', () => {

    it('handleClick should call the start function when clicked', () => {
        const handleClick = sinon.spy();
        const wrapper = mount(<Play start={handleClick} />);
        wrapper.find('.play-game').simulate('click');
        expect(handleClick.calledOnce).to.be.true
    });
});