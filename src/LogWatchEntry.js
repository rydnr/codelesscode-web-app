// src/LogWatchEntry.js
import React from 'react';
import PropTypes from 'prop-types';

const LogWatchEntry = props => (
    <tr><td>{props.timestamp}</td><td>{props.children}</td></tr>
);

LogWatchEntry.propTypes = {
  timestamp: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LogWatchEntry;
