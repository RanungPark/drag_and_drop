module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'prettier', 'react', 'import'],

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },

  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',
    'object-shorthand': ['error', 'always'],
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-require-imports': 'off',

    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
