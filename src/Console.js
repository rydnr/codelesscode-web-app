// src/Console.js
import React from 'react';
import LogWatch from './LogWatch';

class Console extends React.PureComponent {
  state = {
    enabled: false
  };

  render() {
    return <div><LogWatch>LogWatch</LogWatch></div>;
  }
}

export default Console;
