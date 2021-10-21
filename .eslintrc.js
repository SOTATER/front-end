module.exports = {
  parser: '@typescript-eslint/parser', 
  env: {
    browser: true
  },
  plugins: [
    'svelte3',
    '@typescript-eslint' 
  ],
  rules: {
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-argument': 0
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    },
    {
      files: ['**/*.ts', '**/*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
  extends: [ // then, enable whichever type-aware rules you want to use
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: { // add these parser options
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
};