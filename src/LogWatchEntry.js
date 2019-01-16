// src/LogWatchEntry.js
import React from 'react';
import PropTypes from 'prop-types';

const LogWatchEntry = props => (
    <tr><td>{props.timestamp}</td><td></td></tr>
);

LogWatchEntry.propTypes = {
  timestamp: PropTypes.string.isRequired,
};

export default LogWatchEntry;
