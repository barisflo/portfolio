<template>
  <div class="container mx-auto p-10 px-20">
    <div class="flex flex-wrap">
      <div class="md:w-1/2 w-full">
        <img class="rounded-lg m-auto h-96" src="../assets/cv.jpeg" alt="Picture of Florent Baris">
      </div>
      <div class="md:w-1/2 w-full m-auto">
        <h1 class="text-4xl text-center">{{ msg }}</h1>
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
