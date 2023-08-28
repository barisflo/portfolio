<template>
  <div id="app" class="h-screen light">
    <Nav/>
    <section id="about" class="flex h-full">
      <About msg="Florent Baris"/>
      <Arrow/>
    </section>
    <a class="anchor" id="agile"></a>
    <!--<section class="flex">
      <Agile/>
    </section>-->
    <section id="projects" class="flex w-full">
      <Projects msg="Florent Baris"/>
    </section>
    <!--<section id="contact" class="flex w-full">
      <Companies/>
    </section>-->
    <section id="contact" class="flex w-full">
      <ContactMe/>
    </section>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import About from './components/About.vue'
import Projects from '@/components/Projects.vue'
import Arrow from '@/components/Arrow.vue'
import Testimonial from "@/components/Testimonial.vue";
import ContactMe from "@/components/ContactMe.vue";
import Companies from "@/components/Companies.vue";
//import Agile from "@/components/Agile";

export default {
  name: 'App',
  components: {
    Companies,
    Testimonial,
    ContactMe,
//    Agile,
    Nav,
    About,
    Arrow,
    Projects,
  },
  data() {
    return {
      lang: "eng"
    }
  }
}
</script>

<style>

</style>
