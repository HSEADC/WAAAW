const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // About
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    // Sections
    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: './article.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts.html',
      filename: './podcasts.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists.html',
      filename: './checklists.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch.html',
      filename: './merch.html'
    }),
    // Сards
    new HtmlWebpackPlugin({
      template: './src/cards/cards-rodeo.html',
      filename: './cards/cards-rodeo.html'
    }),
    // Checklists
    new HtmlWebpackPlugin({
      template: './src/checklists/checklists-surfing.html',
      filename: './checklists/checklists-surfing.html'
    }),
    // Article
    new HtmlWebpackPlugin({
      template: './src/article/article-surfing.html',
      filename: './article/article-surfing.html'
    }),
    // Podcasts
    new HtmlWebpackPlugin({
      template: './src/podcasts/podcasts-alpinism.html',
      filename: './podcasts/podcasts-alpinism.html'
    }),
    // Merch
    new HtmlWebpackPlugin({
      template: './src/merch/sweatshirt.html',
      filename: './merch/sweatshirt.html'
    }),
    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}


