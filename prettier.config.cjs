/** @type {import("prettier").Config & { [key:string]: any }} */
const config = {
    arrowParens: "always",
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 4,
    plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
