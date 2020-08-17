<template>
  <div class="hello">{{ title }}</div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: function() {
    return {
      title: "登录页面",
    };
  },
  created() {
    this.getHome();
  },
  methods: {
    async getHome() {
      let res = await this.$http.reqHome();
      console.log(res);
    },
  },
};
</script>

<style scoped></style>
