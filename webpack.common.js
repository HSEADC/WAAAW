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

    // Styleguide
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
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
      template: './src/articles.html',
      filename: './articles.html'
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
    // Articles
    new HtmlWebpackPlugin({
      template: './src/articles/surfing_Russia.html',
      filename: './articles/surfing_Russia.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/first_skate.html',
      filename: './articles/first_skate.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/snowboard_summer.html',
      filename: './articles/snowboard_summer.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/first_parachute_jump.html',
      filename: './articles/first_parachute_jump.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/overcome_fear.html',
      filename: './articles/overcome_fear.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/balloon_flight.html',
      filename: './articles/balloon_flight.html'
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/articles/article_2.html',
    //   filename: './articles/article_2.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/articles/article_3.html',
    //   filename: './articles/article_3.html'
    // }),
    // Сards
    new HtmlWebpackPlugin({
      template: './src/cards/konkur.html',
      filename: './cards/konkur.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cyclocross.html',
      filename: './cards/cyclocross.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/rafting.html',
      filename: './cards/rafting.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/drift.html',
      filename: './cards/drift.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/downhill-skiing.html',
      filename: './cards/downhill-skiing.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/sandboarding.html',
      filename: './cards/sandboarding.html'
    }),

    // Checklists
    // new HtmlWebpackPlugin({

    //   template: './src/checklists/checklists-surfing.html',
    //   filename: './checklists/checklists-surfing.html'
    // }),
    // Articles
    new HtmlWebpackPlugin({
      template: './src/articles/article-surfing.html',
      filename: './articles/article-surfing.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/medkit.html',
      filename: './checklists/medkit.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/winter_hiking.html',
      filename: './checklists/winter_hiking.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/summersurfing.html',
      filename: './checklists/summersurfing.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/alone_mountains.html',
      filename: './checklists/alone_mountains.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/hiking_with_family.html',
      filename: './checklists/hiking_with_family.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/pair_diving.html',
      filename: './checklists/pair_diving.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/cyclocross_with_family.html',
      filename: './checklists/cyclocross_with_family.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklists/pair_climbing.html',
      filename: './checklists/pair_climbing.html'
    }),
    // Podcasts
    new HtmlWebpackPlugin({
      template: './src/podcasts/skate_like_prof.html',
      filename: './podcasts/skate_like_prof.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/alpinist_prof.html',
      filename: './podcasts/alpinist_prof.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/kak_nachat_begat.html',
      filename: './podcasts/kak_nachat_begat.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/avtosport_drift.html',
      filename: './podcasts/avtosport_drift.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/snowboard_vazhno.html',
      filename: './podcasts/snowboard_vazhno.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/put_drift.html',
      filename: './podcasts/put_drift.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/chempions_parkur.html',
      filename: './podcasts/chempions_parkur.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/trening_v_otkaz.html',
      filename: './podcasts/trening_v_otkaz.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/podcasts/skalolaz.html',
      filename: './podcasts/skalolaz.html'
    }),
    // Merch
    new HtmlWebpackPlugin({
      template: './src/merch/notepad_1.html',
      filename: './merch/notepad_1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/notepad_2.html',
      filename: './merch/notepad_2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/bag.html',
      filename: './merch/bag.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/bars.html',
      filename: './merch/bars.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/medkit.html',
      filename: './merch/medkit.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/skateboard.html',
      filename: './merch/skateboard.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/t-shirt.html',
      filename: './merch/t-shirt.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/patches.html',
      filename: './merch/patches.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/socks.html',
      filename: './merch/socks.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/mugs.html',
      filename: './merch/mugs.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/merch/case.html',
      filename: './merch/case.html'
    }),
    // 404
    new HtmlWebpackPlugin({
      template: './src/400.html',
      filename: './400.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/500.html',
      filename: './500.html'
    }),
    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
