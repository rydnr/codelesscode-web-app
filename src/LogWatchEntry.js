// src/LogWatchEntry.js
import React from 'react';
import PropTypes from 'prop-types';

const LogWatchEntry = ({ timestamp, children, ...rest }) => (
    <tr {...rest}><td>{timestamp}</td><td>{children}</td></tr>
);

LogWatchEntry.propTypes = {
  timestamp: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LogWatchEntry;
