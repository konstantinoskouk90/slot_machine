// Libs
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import App from '../app/app';

const wrapper = shallow(<App />);

describe('tests for <App> container', () => {

    it('should be a div with a fruit-machine-container class', () => {
        expect(wrapper.find('div.fruit-machine-container')).to.have.length(1);
    });

    it('should have 3 Wheel components', () => {
        expect(wrapper.find('Wheel')).to.have.length(3);
    });

    it('should have 3 starter colors and winning / played booleans should be false', function () {
        expect(wrapper.state().rndColors).to.have.length(3);
        expect(wrapper.state().hasWon).to.equal(false);
        expect(wrapper.state().hasPlayed).to.equal(false);
    });

    it('should have a Play component', () => {
        expect(wrapper.find('Play')).to.have.length(1);
    });
});