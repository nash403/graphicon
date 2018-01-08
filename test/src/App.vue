<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank"><g-icon name="arrow-left"/> Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank"><g-icon name="arrow-right"/> Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank"><g-icon name="chevron-left"/> Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank"><g-icon name="chevron-right"/> Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank"><g-icon name="trending-up"/> vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank"><g-icon name="trending-down"/> vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank"><g-icon name="user"/> vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank"><g-icon name="users"/> awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import GIcon from '../../'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  computed: {
    allIcons() {
      return this.$icons
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  display: inline-flex;
}
</style>
