<template>
<div>
  <navbar />
  <div id="app">
  <router-view/>
  </div>
</div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'app',
  components: {
    navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  @import'~bootstrap/dist/css/bootstrap.css';
}
</style>
