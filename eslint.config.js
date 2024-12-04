import globals from "globals";
import pluginJs from "@eslint/js";

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

