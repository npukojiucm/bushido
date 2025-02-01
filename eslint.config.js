import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['node_modules', 'dist', '.next', 'environment.d.ts', 'next.config.ts'], // Игнорируемые файлы и папки
  },
  js.configs.recommended, // Рекомендованные настройки ESLint
  {
    files: ['**/*.{ts,tsx}'], // Только TypeScript файлы
    languageOptions: {
      parser, // Подключаем TypeScript парсер
      ecmaVersion: 'latest', // Поддержка последнего стандарта ECMAScript
      sourceType: 'module', // Для использования модулей
      globals: {
        process: 'readonly', // Глобальные переменные Node.js
        window: 'readonly',  // Глобальные переменные браузера
        document: 'readonly',
        console: 'readonly', // Добавляем console
        File: 'readonly', // Добавляем глобальную переменную File
        Buffer: 'readonly', // Добавляем глобальную переменную Buffer
        HTMLTableElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLLabelElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLOptionElement: 'readonly',
        HTMLTableRowElement: 'readonly',
        HTMLDialogElement: 'readonly',
        HTMLButtonElement: 'readonly',
        FormData: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin, // Подключаем TypeScript плагин
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error', // Обязательное указание возвращаемого типа
      'prettier/prettier': 'error', // Интеграция с Prettier
    },
  },
  prettierConfig, // Отключаем конфликтующие правила
];
