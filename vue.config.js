// vue.config.js
module.exports = {
    devServer: {
      overlay: {
        warnings: false, // 消除警告
        errors: true
      },
      // 这里使用代理，以api开头的会请求地址会被替换成http://39.97.33.178，不使用代理会向本机请求
      proxy: {
        '/api': {
          target: 'http://39.97.33.178',
          // changeOrigin默认是false：请求头中host仍然是浏览器发送过来的host
          // 如果设置成true：发送请求头中host会设置成target·
          changeOrigin: true 
        }
      }
    }
  }