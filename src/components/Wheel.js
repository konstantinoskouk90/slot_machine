import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  color: PropTypes.string.isRequired
};

// The Wheel function represents the fruit machine wheels
const Wheel = props => (
  <div className={`wheel ${props.color}`}>{props.color.toUpperCase()}</div>
);

Wheel.propTypes = propTypes;

export default Wheel;