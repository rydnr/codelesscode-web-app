// src/upper_case_input.js
import { React } from 'react';

export class UpperCaseInput extends React.Component {
  render() {
    return <input {...this.props} value={this.props.value.toUpperCase()} />;
  }
}
