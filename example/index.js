// example/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Console from '../src/Console';
import logEntries from './logEntries';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Console logEntries={logEntries} />, container);
//
