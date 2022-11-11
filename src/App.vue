<template>
    <nav-bar />
    <div class="contain">
          <router-view />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import HomePage from './components/HomePage.vue';


export default {
  name: 'App',
  components: {
    NavBar
    // HomePage,
  }
}
</script>

<style>
  @import "./style.css" ;
</style>


<!-- TODO: impove this -->
<!-- BUG: this is a bug -->
<!-- FIXME: Fix this  -->
