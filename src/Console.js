// src/Console.js
import React from 'react';
import PropTypes from 'prop-types';
import LogWatch from './LogWatch';
import LogWatchEntry from './LogWatchEntry';

class Console extends React.PureComponent {
  static propTypes = {
    logEntries: PropTypes.arrayOf(PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  }

  state = {
    enabled: false,
  };

  render() {
    return (<div><LogWatch logEntries={this.props.logEntries} /></div>);
  }
}

export default Console;
