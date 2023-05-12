module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'operator-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',

    'arrow-parens': 'warn',
    'import/order': 'warn',
    'lines-between-class-members': 'warn',
    'no-param-reassign': 'warn',
    'no-lonely-if': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-use-before-define': 'warn',
    'no-trailing-spaces': 'warn',
    'no-shadow': 'warn',
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'warn',
    'react/sort-comp': 'warn',
    'arrow-body-style': 'warn',
    indent: 'warn',
    'prefer-const': 'warn',
    'padded-blocks': 'warn',
    'space-in-parens': 'warn',
    'no-unused-expressions': 'warn',
    'no-empty': 'warn',

    'comma-dangle': ['warn', 'only-multiline'],
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function' },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
