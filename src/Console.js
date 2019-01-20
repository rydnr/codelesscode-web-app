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

  renderLogWatchEntries = () => {
    let entries = [];

    const { logEntries } = this.props;

    logEntries.forEach((each, index) => {
      const key = 'log-' + index;
      entries.push(<LogWatchEntry key={key} timestamp={each.timestamp}>{each.text}</LogWatchEntry>);
    });

    return entries;
  };

  render() {
    return (<div><LogWatch>{this.renderLogWatchEntries()}</LogWatch></div>);
  }
}

export default Console;
