const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**/*.html',
      './src/**/*.svelte'
    ],
  
    whitelistPatterns: [/svelte-/],
  
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  });
  
  const production = process.env.NODE_ENV === 'production'
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer'),
      ...(production ? [purgecss] : [])
    ]
  };