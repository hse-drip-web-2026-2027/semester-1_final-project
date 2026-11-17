import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/.runtime/**',
      '**/.cache/**',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'], extends: [js.configs.recommended] },
  { files: ['**/*.ts'], extends: [tseslint.configs.recommended] },
  { files: ['src/**/*.ts'], languageOptions: { globals: globals.browser } },
  {
    files: ['server/**/*.{js,mjs,cjs,ts}', 'tests/**/*.ts', '*.config.{js,mjs,ts}'],
    languageOptions: { globals: globals.node },
  },
])
