module.exports = [
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script"
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];