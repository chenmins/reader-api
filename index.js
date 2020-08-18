const express = require('express')
const proxyMiddlewar = require("http-proxy-middleware");
const proxyPath = 'http://api.zhuishushenqi.com'
const proxyPath2 = 'http://chapter2.zhuishushenqi.com'
const proxyOption = {target: proxyPath,changeOrigin: true,pathRewrite:{'^/api':''}}
const proxyOption2 = {target: proxyPath2,changeOrigin: true,pathRewrite:{'^/content':''}}
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'reader')))
app.use("/api",proxyMiddlewar(proxyOption))
app.use("/content",proxyMiddlewar(proxyOption2))
app.listen(8080, () => console.log('Example app listening on port 8080!'))