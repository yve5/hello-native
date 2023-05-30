module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'object-curly-newline': 'off',
    'import/no-named-as-default': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'comma-dangle': 'off',
  },
};
