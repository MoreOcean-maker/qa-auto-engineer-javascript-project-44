import globals from 'globals'; // Используем одинарные кавычки
import pluginJs from '@eslint/js'; // Используем одинарные кавычки

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Оставляем глобальные переменные для браузера
        ...globals.node,    // Добавляем глобальные переменные для Node.js (например, process)
      },
    },
  },
  pluginJs.configs.recommended,
];

