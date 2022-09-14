const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//1.npm run build 打包代码 
//2.后端把前端代码放入后端工程
//3.后端重启后端服务器
//*容易出问题的就是下面的配置
//*可以尝试更改路径名重新进行打包
module.exports = {
  publicPath: '/jingdong'
}
