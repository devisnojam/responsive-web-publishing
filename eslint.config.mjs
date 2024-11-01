import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { import: importPlugin },
    files: ['**/*.@(js|ts|jsx|tsx)'],
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.common.json',
          './packages/*/tsconfig.json',
          './apps/*/tsconfig.json',
        ],
        ecmaVersion: 'latest',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    ignores: ['**/node_modules'],
  }
);
