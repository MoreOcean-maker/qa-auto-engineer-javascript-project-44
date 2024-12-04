import globals from 'globals'; // Заменены двойные кавычки на одинарные

import path from 'path'; // Заменены двойные кавычки на одинарные
import { fileURLToPath } from 'url'; // Заменены двойные кавычки на одинарные
import { FlatCompat } from '@eslint/eslintrc'; // Заменены двойные кавычки на одинарные
import pluginJs from '@eslint/js'; // Заменены двойные кавычки на одинарные

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname, // Пробелы после фигурных скобок
  recommendedConfig: pluginJs.configs.recommended, // Пробелы после фигурных скобок
});

export default [
  {
    languageOptions: { globals: globals.browser }, // Пробелы после фигурных скобок
  },
  ...compat.extends('airbnb'), // Заменены двойные кавычки на одинарные
];
