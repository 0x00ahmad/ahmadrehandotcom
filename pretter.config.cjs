/** @type {import("prettier").Config & { [key:string]: any }} */
const config = {
  arrowParens: "always",
  printWidth: 82,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 4,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^(expo(.*)$)|^(expo$)",
    "<THIRD_PARTY_MODULES>",
    "^@local101/(.*)$",
    "",
    "^@/utils/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};

module.exports = config;
