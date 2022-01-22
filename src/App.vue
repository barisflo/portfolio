<template>
  <div id="app" class="h-screen">
    <Nav/>
    <section id="about" class="flex h-full">
      <About msg="Florent Baris"/>
      <Arrow/>
    </section>
    <section id="agile" class="flex">
      <Agile/>
    </section>
    <section id="projects" class="flex">
      <Projects msg="Florent Baris"/>
    </section>

  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import About from './components/About.vue'
import Projects from "@/components/Projects";
import Arrow from "@/components/Arrow";
import Agile from "@/components/Agile";

export default {
  name: 'App',
  components: {
    Agile,
    Nav,
    About,
    Arrow,
    Projects,
  }
}
</script>

<style>

</style>
