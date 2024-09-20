const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',   // Entry point for index page
    about: './src/about.js',  // Entry point for about page
    contact: './src/contact.js',   // Entry point for index page
    courses: './src/courses list.js',  // Entry point for about page
    apply: './src/apply.js',   // Entry point for index page
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',  // Output bundle names
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
        filename: 'Contact.html',
        template: './src/Contact.html',
        chunks: ['contact'],
      }),
      new HtmlWebpackPlugin({
        filename: 'courses list.html',
        template: './src/courses list.html',
        chunks: ['courses'],
      }),
      new HtmlWebpackPlugin({
        filename: 'apply.html',
        template: './src/apply.html',
        chunks: ['apply'],
      }),
    // Add more HtmlWebpackPlugin instances for each page
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
