import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import * as emotionPlugin from '@emotion/eslint-plugin';

export default [
  {
    ignores: ['**/node_modules', 'scripts/*'],
  },

  eslintConfigPrettier,
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      plugins: {
        '@emotion': emotionPlugin,
      },
      rules: {
        '@emotion/jsx-import': 'error',
      },
    },
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
