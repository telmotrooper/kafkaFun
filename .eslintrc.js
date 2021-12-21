module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "eol-last": "warn",
    "prefer-const": "warn",
    "semi": ["warn", "never"],
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "keyword-spacing": ["warn", { "before": true }],
    "no-extra-parens": ["warn", "all"]
  }
}
