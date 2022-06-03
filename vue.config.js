const path = require('path')
const resolve = (dir) => {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: '/',
    // baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        port: 8888,
    },
    chainWebpack: (config) => {
        config.resolve.alias
          .set('@', resolve('src'))
          .set('@~', resolve('src/assets'));
      }

}
