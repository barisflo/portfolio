<template>
  <div id="app" class="h-screen">
    <Nav/>
    <section id="about" class="flex h-full">
      <Main msg="Florent Baris"/>
    </section>
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
