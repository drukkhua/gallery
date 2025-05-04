import { defineConfig } from 'eslint/config';
import html from 'eslint-plugin-html';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: ['minimized/**', '**/minimized/**', 'node_modules/**', '**/node_modules/**']
  },
  // Настройки для JS файлов
  {
    files: ['**/*.js'],
    plugins: {
      prettier: prettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: 'avoid',
          bracketSameLine: false
        }
      ],
      'newline-per-chained-call': ['off'], // Отключаем, так как Prettier будет форматировать цепочки
      'max-len': ['off'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['off']
    }
  },
  // Настройки для HTML файлов
  {
    files: ['**/*.html'],
    plugins: {
      html: html,
      prettier: prettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: 'avoid',
          bracketSameLine: false,
          embeddedLanguageFormatting: 'auto'
        }
      ],
      'newline-per-chained-call': ['off'], // Отключаем, так как Prettier будет форматировать цепочки
      'max-len': ['off'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['off']
    }
  }
]);
