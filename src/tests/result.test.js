// Libs
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import Result from '../components/result';

const props = {
    played: true,
    won: true
};

const container = shallow(<Result {...props} />);

describe('tests for <Result> container', () => {

    it('should contain the class show', () => {
        expect(container.find('.result').hasClass('show')).to.equal(true);
    });

    it('should not contain the class hide', () => {
        expect(container.find('.result').hasClass('hide')).to.not.equal(true);
    });

    it('should contain the text Winner!', () => {
        expect(container.find(".result").text()).to.equal('Winner!');
    });

    it('should not contain the text Better luck next time.!', () => {
        expect(container.find(".result").text()).to.not.equal('Better luck next time.');
    });
});