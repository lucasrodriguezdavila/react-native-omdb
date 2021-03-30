module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: ["airbnb", "plugin:prettier/recommended", "plugin:react-native/all"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "react-native"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": ["error", { variables: false }],
    "linebreak-style": 0,
    "react/prop-types": 0,
  },
};
