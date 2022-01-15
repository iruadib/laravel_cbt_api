const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
*/

mix.js('resources/js/app.js', 'public/js')
.react()
.extract(['react', 'axios'])
.sass('resources/css/app.scss', 'public/css/style.min.css')
.sass('resources/css/noscript.scss', 'public/css/noscript.min.css')
  .options({
    autoprefixer: {
      options: {
        browsers: [
          "defaults",
          "not ie < 11",
          "last 2 major versions",
          "last 2 Chrome versions",
          "not dead",
          "> 1%",
          "iOS 7",
          "last 2 iOS versions",
          "Firefox ESR"
        ]
      }
    }
  })
  .version()
