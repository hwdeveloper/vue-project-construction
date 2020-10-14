import { CAR_LIST } from "../../action";
import api from "../../../net/api";

const reqCarList = api.reqCarList;
//console.log(reqCarList);

let list = sessionStorage.getItem(CAR_LIST)
  ? JSON.parse(sessionStorage.getItem(CAR_LIST))
  : {};

// 一个模块就是一个对象！
export default {
  namespaced: true,
  // 模块里面的state是 函数，且返回对象！
  state: () => ({
    list: list,
    title: "主页面",
  }),
  getters: {
    title: (state) => {
      return state.title;
    },
    list: (state) => {
      return state.list;
    },
  },
  mutations: {
    [CAR_LIST](state, list) {
      state.list = list;
    },
  },
  actions: {
    async carList(context) {
      let list = await reqCarList();
      context.commit(CAR_LIST, list);
    },
  },
};
