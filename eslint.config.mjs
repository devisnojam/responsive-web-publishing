import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/node_modules', 'scripts/start-app.js'],
  },
  eslintConfigPrettier,
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      files: ['**/*.@(js|jsx|ts|tsx)'],
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
    },
    {
      plugins: { import: importPlugin },
      ignores: ['**/node_modules', './scripts/*'],
      files: ['**/*.@(js|jsx|ts|tsx)'],
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
    }
  ),
];
