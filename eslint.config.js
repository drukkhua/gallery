import { defineConfig } from 'eslint/config';
import html from 'eslint-plugin-html';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  { ignores: ['minimized/**', '**/minimized/**', 'node_modules/**', '**/node_modules/**'] },
  // Настройки для JS файлов
  {
    files: ['**/*.js'],
    plugins: { prettier: prettier },
    linterOptions: { reportUnusedDisableDirectives: 'warn' },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: 'avoid',
          bracketSameLine: true
        }
      ],
      'newline-per-chained-call': ['off'],
      'max-len': ['off'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['off'],
      // 'object-curly-newline': 'off',
      // 'object-curly-newline': [
      //   'error',
      //   {
      //     ObjectExpression: { multiline: false, minProperties: 99 },
      //     ObjectPattern: { multiline: false, minProperties: 99 }
      //   }
      // ],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }]
    }
  },
  // Настройки для HTML файлов
  {
    files: ['**/*.html'],
    plugins: { html: html, prettier: prettier },
    linterOptions: { reportUnusedDisableDirectives: 'warn' },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: false,
          arrowParens: 'avoid',
          bracketSameLine: true,
          embeddedLanguageFormatting: 'auto',
          htmlWhitespaceSensitivity: 'strict',
          embeddedLanguageFormatting: 'auto'
        }
      ],
      'newline-per-chained-call': ['off'],
      'max-len': ['off'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['off'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: false, minProperties: 99 },
          ObjectPattern: { multiline: false, minProperties: 99 }
        }
      ],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }]
    }
  }
]);
