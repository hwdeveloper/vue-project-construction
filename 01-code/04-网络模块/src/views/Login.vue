<template>
  <div class="hello">{{ title }}</div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: function () {
    return {
      title: "登录页面",
    };
  },
  created() {
    this.register("study8888", "123w", 18, "天气真好");
  },
  methods: {
    async register(name, passwd, age, infor) {
      let ob = {
        name: name,
        passwd: passwd,
        age: age,
        infor: infor,
      };
      let res = await this.$http.register(ob);

      console.log(res);
    },
    async login(name, passwd) {
      let res = await this.$http.login({
        name: name,
        passwd: passwd,
      });
      console.log(res);
    },
  },
};
</script>

<style scoped></style>
