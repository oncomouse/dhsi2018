module.exports = {
  'extends': 'eslint-config-airbnb',
  'env': {
    'browser': true,
  },
  'parser': 'babel-eslint',
  'globals': {
    'process': false,
    'APP_TITLE': false
  },
  'rules': {
    'no-unused-expressions': 0,
  },
};