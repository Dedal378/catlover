// npm i postcss postcss-loader postcss-preset-env postcss-assets postcss-color-mod-function postcss-animation postcss-fixes
// cssnano -D
// можно еще поробовать эти плагины:
// immutable-css list-selectors doiuse

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'color-mod-function': { unresolved: 'warn' }
      }
    }),
    require('postcss-assets')({
      loadPaths: ['public/']
    }),
    require('postcss-color-mod-function'),
    require('postcss-animation'),
    require('postcss-fixes')({
      preset: 'recommended'
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
  ]
};
