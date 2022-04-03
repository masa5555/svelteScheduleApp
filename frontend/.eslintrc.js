module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'svelte3'
  ],
  overrides: [
    {
      files: ['src/**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    "semi": ["error", "never"]
  },
  settings: {
    'svelte3/typescript': true
  }
}
