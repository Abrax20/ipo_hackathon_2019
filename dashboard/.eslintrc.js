module.exports = {
  root: true, // make to not take in any user specified rules in parent folders
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended', 'prettier/flowtype', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['flowtype'],
  rules: {
    'import/first': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'prettier/prettier': 'error',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
  },
};
