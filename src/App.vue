<template>
  <div style="background:#ddd; margin-bottom:30px">
    <div
      style="display:flex; align-items:center; justify-content: center; height:150px;"
    >
      <h1>Yu-Gi-Oh! Stream Tool</h1>
    </div>
  </div>
  <div class="container mt-1">
    <div class="row">
      <div class="row">
        <div class="col-md-6"><Cards /></div>
        <div class="col-md-6"><Players /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Players from './components/Players.vue'
import Cards from './components/Cards.vue'

export default {
  components: { Players, Cards },
  setup() {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
