---
title: Webpack4使用
nav:
  path: /frame
  title: 框架工具
  order: 10
group:
  path: /frame/webpack
  title: Webpack
  order: 100
---

```js
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { networkInterfaces } = require('os');
const TerserPlugin = require('terser-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
function getLocalIP() {
  const interfaces = networkInterfaces();
  const result = [];

  for (const interfaceName in interfaces) {
    const addresses = interfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === 'IPv4' && !address.internal) {
        result.push(address.address);
      }
    }
  }

  return result;
}

const localIPs = getLocalIP();
const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'xarmstudio'),
    filename: 'static/js/[name].[hash:7].js', // 输出的 JS 文件路径
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.vue$/, // 匹配 .vue 文件
        loader: 'vue-loader', // 使用 vue-loader 处理
      },
      {
        test: /\.js$/, // 匹配 .js 文件
        // exclude: /node_modules/, // 排除目录
        include: path.resolve(__dirname, '..', 'src'),
        use: {
          loader: 'babel-loader', // 使用 babel-loader 处理
          options: {
            presets: ['@babel/preset-env'], // Babel 预设
          },
        },
      },
      // 其他 loader 配置（处理样式、图片等）
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                syntax: 'postcss-scss', // Specify the syntax
                plugins: [
                  // Add your PostCSS plugins here
                  require('autoprefixer'),
                  // Other PostCSS plugins
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]', // 修改路径设置
          publicPath: '/', // 添加 publicPath
        },
      },
      {
        test: /\.(stl|dds)(\?.*)?/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/stl/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.xml/,
        loader: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 解析扩展名
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 指定 Vue 版本
      '@': path.resolve(__dirname, 'src'), // 设置 '@' 为 src 目录的别名
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[hash:7].css', // 输出的 CSS 文件路径
    }),
    // 过滤没有使用的class
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: `${
        process.env.NODE_ENV === 'production' ? 'templates/' : ''
      }index.html`,
      inject: true, // 将脚本注入到HTML文件中
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new VueLoaderPlugin(), // VueLoaderPlugin 插件
    new webpack.ProgressPlugin({
      activeModules: false, // 是否显示活跃模块
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'xarmstudio'),
    publicPath: '/',
    port: 18333,
    hot: true,
    host: localIPs.length ? localIPs[0] : '0.0.0.0',
    open: false,
    quiet: true,
    historyApiFallback: true,
  },
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: 'warning',
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 500000000,
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 500000000,
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production', //TODO 打包时打开
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        monaco: {
          name: 'monaco-editor',
          test: /[\\/]node_modules[\\/](monaco-editor)[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
};
```
