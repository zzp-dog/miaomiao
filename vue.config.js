// vue.config.js
module.exports = {
    devServer: {
      overlay: {
        warnings: false, // 消除警告
        errors: true
      },
      // 这里使用了反向代理（可以实现负载均衡，一般使用nginx）
      proxy: {
        '/api': {
          target: 'http://39.97.33.178',
          changeOrigin: true // 是否改变反向代理的地址
        }
      }
    }
  }