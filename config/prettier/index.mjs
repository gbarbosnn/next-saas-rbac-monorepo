/** @typedef {import { 'prettier' }.Config} PrettierConfig */
/** @type {PrettierConfig }*/

const config= {
  plugins:['prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidht: 2,
  useTabs: false,
  semi:false,
  singleQuote:true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowsParens:'always',
  endOfLine: 'auto',
  bracketSameLine: false,
}


export default config