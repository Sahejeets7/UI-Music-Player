module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  plugins: ['prettier', 'testing-library', 'eslint-comments', 'import'],
  globals: {
    Maybe: true,
    Falsy: true,
    JSX: true,
    GDRequest: true,
    __DEV__: true,
    _trfq: true,
    HivemindExperiment: true,
    FeatureFlags: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/self-closing-comp': 'error',
    'prettier/prettier': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'react-hooks/exhaustive-deps': 'off',
    'id-length': 'off',
    'jest/valid-expect-in-promise': 'error',
    'cypress/no-unnecessary-waiting': 'off',
    complexity: ['error', { max: 40 }],
    'max-statements': ['error', { max: 50 }],
    'no-undefined': 'off',
    'no-var': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    curly: 'error',
    'require-await': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    'react/jsx-pascal-case': ['error', { allowNamespace: true }],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'default-param-last': 'error',
  },
  ignorePatterns: ['coverage', 'reports'],
  overrides: [
    {
      files: ['**/?(*.)+(cy).[jt]s?(x)'],
      rules: {
        'jest/valid-expect-in-promise': 'off',
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
      },
    },
    {
      files: ['**/?(*.)+(spec).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/await-async-queries': 'error',
        'testing-library/no-await-sync-queries': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
        'testing-library/no-node-access': [
          'error',
          { allowContainerFirstChild: true },
        ],
        'jest/no-conditional-in-test': 'error',
        'jest/prefer-to-be': 'error',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
      },
    },
  ],
};
