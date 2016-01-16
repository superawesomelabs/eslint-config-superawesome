module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  ecmaFeatures: {
    modules: true,
  },
  rules: {
    strict: 0,
    quotes: [2, 'single', 'avoid-escape']
  }
};