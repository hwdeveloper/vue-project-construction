//================== 区分环境，配置接口地址
let host, api_url;
let type = process.env.NODE_ENV;
if (type == "development") {
  // 开发环境
  host = "http://localhost:9999";
  api_url = "/api";
}
if (type == "production") {
  // 生成环境
  host = "http://localhost:9999";
  api_url = "/api";
}

export { host, api_url };
