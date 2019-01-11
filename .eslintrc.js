// .eslintrc.js
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    'comma-dangle': [ 'error', 'always-multiline' ]
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '16.7.0'
    }
  }
};
