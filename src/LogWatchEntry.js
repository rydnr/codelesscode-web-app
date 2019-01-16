// src/LogWatchEntry.js
import React from 'react';
import PropTypes from 'prop-types';

class LogWatchEntry extends React.PureComponent {

  render() {
    const { timestamp, children, ...rest } = this.props;
    return (<tr {...rest}><td>{timestamp}</td><td>{children}</td></tr>);
  }

  asJson() {
    const { timestamp, children } = this.props;
    return { timestamp: timestamp, text: children };
  }
}

LogWatchEntry.propTypes = {
  timestamp: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LogWatchEntry;
