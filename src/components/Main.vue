<template>
  <div class="container mx-auto p-10">
    <div class="flex flex-wrap">
      <div class="m-auto">
        <img class="rounded-lg hover:object-scale-down overflow-hidden h-96" src="../assets/cv.jpeg" alt="Picture of Florent Baris">
      </div>
      <div class="m-auto">
        <h1 class="text-4xl">{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
