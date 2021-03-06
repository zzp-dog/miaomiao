// vue.config.js
var publicPath = '/miaomiao';
if (process.env.NODE_ENV === 'dev') { // 开发环境
    publicPath = '/';
}
module.exports = {
    // 配置静态资源访问的根文件夹
    publicPath: publicPath,
    devServer: {
      overlay: {
        warnings: false, // 消除警告
        errors: true
      },
      proxy: require('./birdmock/config.json').proxy
    }
  }