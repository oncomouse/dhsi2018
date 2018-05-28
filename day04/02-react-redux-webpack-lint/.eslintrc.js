module.exports = {
  'extends': 'eslint-config-airbnb',
  'env': {
    'browser': true,
  },
  'parser': 'babel-eslint',
  'globals': {
    'process': false,
  },
  'rules': {
    'no-unused-expressions': 0,
  },
};