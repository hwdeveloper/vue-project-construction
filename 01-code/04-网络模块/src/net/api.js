//包含所有的请求模块
import { get, post } from "./ajax";

//get:1   post:2   updeteFile:3
//let request = [{ api: "login", ask: 2 }, { api: "home", ask: 1 }, { api: "home", ask: 1 }]


//let apiBuffer = {}

// for (let i = 0; i < request.length; i++) {
//   if (request[i].ask == 1) {
//     apiBuffer[request[i].api] = (ob) => get("/" + request[i].api, ob);
//   } else if (request[i].ask == 2) {
//     apiBuffer[request[i].api] = (ob) => post("/" + request[i].api, ob);
//   }
// }

//登录模块接口
const login = (ob) => post("/login", ob);
const register = (ob) => post("/register", ob);
const update = (ob) => post("/update", ob);
const update2 = (ob) => get("/update2", ob);

let api = {
  login: login,
  register: register,
  update: update,
  update2: update2
};

export default api;
