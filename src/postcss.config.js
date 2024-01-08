const autoprefixer = require('autoprefixer');
const postcsspresetenv = require('postcss-preset-env');
const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer(),postcsspresetenv,cssnano],

            },
          },
        ],
      },
    ],
  },
};