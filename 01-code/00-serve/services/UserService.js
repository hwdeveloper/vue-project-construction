let UserModel = require("../models/UserModel");
class UserService {
    constructor() {
        this.model = new UserModel();
    }

    //进行业务逻辑处理
    async login(name, passwd) {

        console.log("**查询前**")
        console.log(name)
        console.log(passwd)

        let ob = {
            code: 200,
            msg: "用户合法"
        }
        //1,从数据库里面查询name对应的密码
        let res = await this.model.selectUserByName(name);
        console.log("**查询后**")
        console.log(res[0])
        //2,对密码进行判断，（1）不存在（2）有密码
        if (res[0].passwd != passwd) {
            ob.code = 404;
            ob.msg = "用户不合法"
            return ob;
        }
        return ob;
    }

    async register(name, passwd, age, infor) {

        //1,创建一个响应数据
        let ob = {
            code: 200,
            msg: "添加用户成功"
        }

        //2,插入用户
        let res = await this.model.insertUser(name, passwd, age, infor);
        //3,把res添加到state上面
        ob.data = res;
        console.log(res)
        //4,给控制器返回处理数据
        return ob;
    }

}

module.exports = UserService;