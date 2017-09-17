import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
    played: PropTypes.bool.isRequired,
    won: PropTypes.bool.isRequired
};

/**
 * The Result function hides or shows the result based on if the user has started 
 * playing or not, and also determines the result based on if the user has won
 */
const Result = props => (
    <div className={props.played ? "result show" : "result hide"}>
        {props.won ? "Winner!" : "Better luck next time."}
    </div>
);

Result.propTypes = propTypes;

export default Result;