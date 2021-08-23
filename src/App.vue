<template>
  <div class="container">
    <div class="row pt-4 mb-4">
      <div class="col-md-12">
        <h1 class="card title">Yu-Gi-Oh! Stream Tool</h1>
      </div>
    </div>

    <div class="row mt-1">
      <div class="col-md-6"><Cards /></div>
      <div class="col-md-6"><Players /></div>
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
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  background: #140217;
}

.title {
  text-align: center;
}
</style>
