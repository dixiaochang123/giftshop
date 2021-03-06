const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const config = require('./src/request/config')
const { mockUrl } = config[process.env.NODE_ENV]
module.exports = {
  // 基本路径
  publicPath: '/',
  // baseUrl: './',
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    disableHostCheck: true,
    // host:'0.0.0.0',
    port: '8888',
    https: false,
    open: true, //配置自动启动浏览器
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {

      '/': {
        target: mockUrl,
        pathRewrite: {
          '^/': '/'
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    // config.entry = ['babel-polyfill','./src/main.js'],
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@~', resolve('src/assets'));
  },
  configureWebpack: config => {
    config.name = '一点礼至'
    config.entry = ['babel-polyfill', './src/main.js']
  },

}
