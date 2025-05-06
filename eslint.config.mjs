import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslint from '@eslint/js';

export default defineConfig([
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node,
      },
      ecmaVersion: 2018,
      sourceType: 'script'
    }
  },
  {
    files: ['test/*-test.js'],
    languageOptions: {
      globals: globals.mocha,
    }
  },
]);
