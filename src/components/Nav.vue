<template>
  <nav class="fixed w-full bg-cultured z-10">
    <div class="container flex justify-center items-center p-5 mx-auto text-gray-800 capitalize dark:text-gray-300">
      <div>
      <a href="#about" class="border-b-2 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:border-celadonBlue mx-1.5 sm:mx-6">About</a>

      <a href="#agile" class="border-b-2 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:border-celadonBlue mx-1.5 sm:mx-6">Agile</a>

      <a href="#projects" class="border-b-2 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:border-celadonBlue mx-1.5 sm:mx-6">Projects</a>
      </div>
      <div class="container absolute flex justify-end pointer-events-none mr-20">
        <div class="pointer-events-auto">
          <a @click="changeLang('kr')" class="cursor-pointer border-b-2 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:border-celadonBlue">Korean</a>
          <a @click="changeLang('eng')" class="cursor-pointer border-b-2 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:border-celadonBlue">English</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    changeLang(lang) {
      this.$lang = lang;
      //location.reload();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
