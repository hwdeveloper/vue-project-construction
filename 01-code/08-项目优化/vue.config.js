// vue.config.js   脚手架的配置文件
module.exports = {
  // 选项...
  chainWebpack: (config) => {
    config.when(process.env.NODE_ENV === "production", (config) => {
      config
        .entry("app")
        .clear()
        .add("./src/main-prod.js");

      config.set("externals", {
        vue: "Vue",
        "vue-router": "VueRouter",
        axios: "axios",
        lodash: "_",
        echarts: "echarts",
        nprogress: "NProgress",
        "vue-quill-editor": "VueQuillEditor",
      });
      config.plugin("html").tap((args) => {
        args[0].isProd = true;
        return args;
      });
    });
    config.when(process.env.NODE_ENV === "development", (config) => {
      config
        .entry("app")
        .clear()
        .add("./src/main-dev.js");

      config.plugin("html").tap((args) => {
        args[0].isProd = false;
        return args;
      });
    });
  },
  // 配置跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:9999", // 接口的域名
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置，为true的话，请求的header将会设置为匹配目标服务器的规则（Access-Control-Allow-Origin）
        pathRewrite: {
          "^/api": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
        },
      },
    },
  },
};
