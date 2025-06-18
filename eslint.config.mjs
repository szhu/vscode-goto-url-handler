// @ts-check
import eslintPluginSortKeysFix from "eslint-plugin-sort-keys-fix";

import globals from "globals";

export default [
  {
    files: ["**/*.{m,}{j,t}s{x,}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.mocha,
      },
      sourceType: "module",
    },
    plugins: {
      "sort-keys-fix": eslintPluginSortKeysFix,
    },
    rules: {
      "constructor-super": "warn",
      "eqeqeq": ["error", "always", { null: "ignore" }],
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "sort-keys-fix/sort-keys-fix": "warn",
      "valid-typeof": "warn",
    },
  },
];
