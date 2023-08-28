<template>
  <div class="absolute bottom-0 left-0 w-full justify-center mb-10">
  <a id="arrow" href="#projects" onclick="this.remove();">
      <div class="animate-bounce bg-celadonBlue p-2 w-12 h-12 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center m-auto
                    hover:bg-prussianBlue">
        <svg class="w-6 h-6 text-white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Arrow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
