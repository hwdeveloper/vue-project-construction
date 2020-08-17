//包含所有的请求模块
import { get, post } from "./ajax";
//登录模块接口
const login = (ob) => post("/login", ob);
const home = (ob) => get("/home", ob);

let api = {
  reqLogin: login,
  reqHome: home,
};

export default api;
