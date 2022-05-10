const path = require('path') // 引入path模块 -> 设置绝对路径
function resolve(dir) { // 声明一个函数,调用函数的时候传入相对路径
  return path.join(__dirname, dir) // return绝对路径
}
module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint

  devServer: {
    disableHostCheck: true,
    open: false, //是否自动弹出浏览器页面
    host: "0.0.0.0",//
    https: false,   //是否使用https协议
    hotOnly: true, //是否开启热更新
    port: 8003,
  },
  publicPath: '',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))

  },
  configureWebpack: config => {
    config.externals = {
    
    };
  },
};
