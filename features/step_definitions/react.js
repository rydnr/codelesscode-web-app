// features/step_definitions/react.js
const { register } = require('react-cucumber');

const { UpperCaseInput } = require('../../src/upper-case-input');

register([
  UpperCaseInput,
]);
