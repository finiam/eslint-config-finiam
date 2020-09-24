module.exports = {
  plugins: ["prettier"],
  parser: "babel-eslint",
  extends: ["airbnb-base", "prettier"],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
    "eol-last": ["error", "always"],
    curly: ["error", "multi-line"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if",
      },
      {
        blankLine: "always",
        prev: "if",
        next: "*",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
      },
    ],
    "id-length": [
      "error",
      {
        exceptions: ["_", "x", "y"],
      },
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "import/extensions": "off",
    "import/no-unresolved": [
      2,
      {
        ignore: ["root/"],
      },
    ],
  },
};
