<template>
  <div id="app" class="h-screen bg-cultured">
    <Nav/>
    <div>
      <Main msg="Florent Baris"/>
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Main,
    Nav
  }
}
</script>

<style>

</style>
