//包含所有的请求模块
import { get, post } from "./ajax";
//登录模块接口
const login = (ob) => post("/login", ob);
const home = (ob) => get("/home", ob);
const carList = () => get("/car/list");

let api = {
  reqLogin: login,
  reqHome: home,
  reqCarList: carList,
};

export default api;
