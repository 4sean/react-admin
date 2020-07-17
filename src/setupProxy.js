const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/devApi',{
    target:'http://www.web-jshtml.cn/api/react',//
    changeOrigin:true,
    pathRewrite:{
      "^/devApi":"",
    }
  }))
  // app.use(createProxyMiddleware('/manage/api',{
  //   target:'http://admintest.happymmall.com:7000',
  //   changeOrigin: true
  // }))
}