module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': 'off', // allow: 'false-ish object' || 'default object'
    '@typescript-eslint/triple-slash-reference': 0, // for next-env.d.ts
    'no-extra-semi': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'no-use-before-define': 'off',
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    camelcase: 'off',
    semi: ['error', 'always']
  },
  ignorePatterns: ['node_modules/*', 'public/*', 'vite.config.ts', 'dist/*']
};
