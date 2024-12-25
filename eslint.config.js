import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', 'dist', '.next'], // Папки, которые нужно игнорировать
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Расширения файлов
    rules: {
      'prettier/prettier': 'error', // Интеграция Prettier
    },
    plugins: ['prettier'],
  },
  prettier,
];
