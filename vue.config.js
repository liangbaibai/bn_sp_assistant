const path = require('path') // 引入path模块 -> 设置绝对路径
function resolve(dir) { // 声明一个函数,调用函数的时候传入相对路径
  return path.join(__dirname, dir) // return绝对路径
}
module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint

  devServer: {
    hot: true, // 热加载
    host: '0.0.0.0', // ip地址
    port: 8003, // 端口
    https: false, // false关闭https，true为开启
    open: false, // 自动打开浏览器
    proxy: {
      '/official_s2': {
        // target: 'http://192.168.10.85:10001/', // 后端本地
        target: 'http://47.106.134.247/',
        changeOrigin: true,  // 设置跨域
        pathRewrite: {}
      },
      '/website_s2': {
        // target: 'http://192.168.10.85:10001/', // 后端本地
        target: 'http://47.106.134.247/',
        changeOrigin: true,  // 设置跨域
        pathRewrite: {}
      },
    }
  },
  publicPath:'/html/pc',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))

  },
  configureWebpack: config => {
    config.externals = {
    
    };
  },
};
