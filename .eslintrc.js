module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'function', next: 'function' },
    ],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //   },
    // ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'no-underscore-dangle': 0,
    'lines-between-class-members': ['error', 'always'],
    'implicit-arrow-linebreak': 0,
    'arrow-parens': 0,
    'jsx-a11y/label-has-for': 0,
    'no-debugger': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-mixed-operators': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0,
    'react/sort-comp': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-fragments': 0,
    'no-array-constructor': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
  },
};
