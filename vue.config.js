const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  devServer: {
    open: true // 浏览器自启动
  },
  chainWebpack: config => {
    config.resolve.alias // 设置路径别名
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
    config.plugin('html').tap(args => {
      args[0].title = 'mall' // 修改应用名称
      return args
    })
    config.resolve.extensions.add('vue')
  }
}
