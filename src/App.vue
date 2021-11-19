<template>
  <div id="app">
    <div id="nav">
      <li v-for="item in navbars" v-bind:key="item.id">
        <router-link :to="{ path: item.router }">{{ item.names }}</router-link>
      </li>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      navbars: [
        { names: "Home1", router: "/Home", id: 1 },
        { names: "Home2", router: "/Home2", id: 2 },
        { names: "Home3", router: "/Home3", id: 3 },
        { names: "Home4", router: "/Home4", id: 4 },
        { names: "Home5", router: "/Home5", id: 5 },
      ],
    };
  },
};
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
