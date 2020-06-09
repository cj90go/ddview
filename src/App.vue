<template>
  <div id="app">
    <HelloDDD></HelloDDD>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloDDD  from "@/components/HelloDDD";

export default {
  name: 'App',
  components: {
    HelloDDD
  }
}
</script>

<style>
#app {
  font-family: "微软雅黑";
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
}
</style>
