// npm i postcss postcss-loader postcss-preset-env postcss-animation postcss-fixes cssnano -D
// можно еще поробовать эти плагины:
// npm i stylelint stylelint-config-standard -D  //разобраться с настройкой правил//
// npm i immutable-css list-selectors doiuse -D

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
        'color-mod-function': { unresolved: 'warn' }
      }
    }),
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
