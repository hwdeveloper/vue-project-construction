//引入框架
let express = require("express");
//获得对象
var app = express();
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST"],
  })
);
//设置跨域访问
// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
//   next();
// });
//引入body-parser模块
let bodyParser = require("body-parser");
//创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

app.get("/home", function (req, res) {
  res.json({ title: "主页面", code: 1, msg: "提交成功" });
});

app.get("/car/list", function (req, res) {
  res.json([
    { id: 0, name: "大众", price: 10 },
    { id: 1, name: "宝马", price: 11 },
  ]);
});



//控制器只接受用户提交的数据，同时解析
let userController = require("./controllers/userController")
app.post("/login", urlencodedParser, userController.login);//登录验证
app.post("/register", urlencodedParser, userController.register);


var server = app.listen(9999, () => {
  console.log("启动服务器");
});
