module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/named': 0,
    'global-require': 0,
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 0,
    'no-unsafe-optional-chaining': 0,
    'func-names': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-no-constructed-context-values': 0,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
