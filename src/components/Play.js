import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
    start: PropTypes.func.isRequired
};

// The Play function represents the button which starts the game
const Play = props => (
    <button className="play-game" onClick={props.start}>Play!</button>
);

Play.propTypes = propTypes;

export default Play;