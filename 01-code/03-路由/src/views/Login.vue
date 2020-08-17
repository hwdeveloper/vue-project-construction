<template>
  <div class="hello">
    {{ title }}
  </div>
</template>

<script>
window.sessionStorage.setItem("token", "你好");
export default {
  name: "HelloWorld",

  data: function() {
    return {
      title: "登录页面",
    };
  },
};
</script>

<style scoped></style>
