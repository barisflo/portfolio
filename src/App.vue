<template>
  <div id="app" class="h-screen">
    <section id="about" class="flex h-full">
      <About msg="Florent Baris"/>
    </section>
  </div>
</template>

<script>
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    About,
  }
}
</script>

<style>

</style>
