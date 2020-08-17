<template>
  <div class="hello">
    {{ title }}
    {{ user.name }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { USER_SET } from "../store/action";

export default {
  name: "HelloWorld",

  data: function() {
    return {};
  },

  created() {
    this.login();
  },
  computed: {
    ...mapGetters("user", { user: "user", title: "title" }),
  },
  methods: {
    async login() {
      let res = await this.$http.reqLogin({
        name: "wangzhijun",
        passwd: 123456,
      });
      window.sessionStorage.setItem("token", true);
      this.$router.push("/");
      this.setUser(res.user);
    },

    ...mapActions("user", {
      setUser: USER_SET,
    }),
  },
};
</script>

<style scoped></style>
