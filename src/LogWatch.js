// src/LogWatch.js
import React from 'react';
import propTypes from 'prop-types';

const LogWatch = props => <div {...props} />;


LogWatch.propTypes = {
  children: propTypes.node.isRequired,
};

export default LogWatch;
