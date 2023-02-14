module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-no-literals': 'warn',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
}
