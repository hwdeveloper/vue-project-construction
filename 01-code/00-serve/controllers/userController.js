//接收用户请求，解析请求数据
let UserService = require("../services/UserService");
module.exports.login = async function (req, res) {
    //1，解析请求数据
    let { name, passwd } = req.body;
    //2，创建业务逻辑
    let userService = new UserService();
    //3，业务逻辑进行用户合法性判断，返回结果
    let ob = await userService.login(name, passwd);
    //4，把返回对象传回给前端
    res.json(ob);
}

module.exports.register = async function (req, res) {
    //1,解析请求数据
    let { name, passwd, age, infor } = req.body;
    //2,创建业务逻辑层
    let userService = new UserService();
    //3,根据用户提交的数据，保存
    let ob = await userService.register(name, passwd, age, infor);

    //4,由response进行数据响应
    res.json(ob);
}



