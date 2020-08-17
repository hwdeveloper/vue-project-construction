const express = require("express");
// 创建 web 服务器
const app = express();
// 导入包
const compression = require("compression");
// 启用中间件
app.use(compression());

// 托管静态资源
app.use(express.static("./dist"));

// 启动 web 服务器
app.listen(8888, () => {
  console.log("启动服务器");
});
