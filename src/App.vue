<template>
  <div class="container">
    <div class="row pt-4 mb-4">
      <div class="col-md-12">
        <h1 class="title">Yu-Gi-Oh! Stream Tool</h1>
      </div>
    </div>

    <div class="row mt-1">
      <div class="col-md-6"><Cards /></div>
      <div class="col-md-6"><Players /></div>
    </div>

    <div class="credentials">
      Developed with ❤️ by AlaricLg -
      <a href="twitter.com/alariclg">https://twitter.com/AlaricLg</a> -
      <a href="github.com/alariclg">https://github.com/AlaricLg</a>
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
  min-height: 100vh;
  font-family: 'RobotoCondensed';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  background: linear-gradient(
    177deg,
    rgba(7, 56, 88, 1) 0%,
    rgba(20, 2, 23, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  background-size: cover;
  background-repeat: no-repeat;
}

.title {
  font-size: 4.5rem;
  text-align: center;
  font-family: 'RobotoCondensedBold';
}
</style>
