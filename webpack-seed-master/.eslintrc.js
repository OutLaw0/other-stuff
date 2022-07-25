module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    "import", "@typescript-eslint"
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: ["tsconfig.json"],
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  env: {
    "es6": true,
    "browser": true,
    "node": true,
  },
  rules: {
    "no-debugger": "off",
    "no-console": 0,
    "class-methods-use-this": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "no-new": 1
  },
  globals: {
    "NodeJS": true
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
