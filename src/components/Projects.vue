<template>
  <div class="container p-10 md:p-2 px-20">
    <Card>Test</Card>
  </div>
</template>


<script>
import Card from './Card.vue'

export default {
  name: 'Projects',
  components: {
    Card,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
