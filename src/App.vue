<template>
  <div id="app" class="h-screen">
    <Nav/>
    <section id="about" class="flex h-full">
      <About msg="Florent Baris"/>
      <div class="absolute bottom-0 left-0 w-full justify-center mb-10">
        <a id="arrow" href="#projects" onclick="this.remove();">
        <div class="animate-bounce bg-celadonBlue p-2 w-12 h-12 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center m-auto
                    hover:bg-prussianBlue">
          <svg class="w-6 h-6 text-white" fill="none"  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        </a>
      </div>
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

export default {
  name: 'App',
  components: {
    Projects,
    About,
    Nav
  }
}
</script>

<style>

</style>
