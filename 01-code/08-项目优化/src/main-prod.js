import App from "./App.vue";
import http from "./net/api";
import store from "./store/index";
import utlis from "./utils/index";
// 配置 Vue 插件
Vue.use(ElementUI);

Vue.prototype.$http = http;
Vue.prototype.$utlis = utlis;

Vue.config.productionTip = false;

console.log("模式");
console.log(process.env.NODE_ENV);

new Vue({ store, router, render: (h) => h(App) }).$mount("#app");
