<template>
  <div class="w-80 md:px-4">
    <a v-bind:href="link" target="_blank">
    <div class=" md:w-20rem shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105
    bg-white rounded-lg overflow-hidden mb-10">
      <div class="h-60 overflow-hidden">
        <img
            v-bind:src="require('@/assets/' + img)"
            v-bind:alt="img"
            class="object-cover h-60 w-80"
        />
      </div>
      <div class="h-48 p-4 text-center flex-col flex">
        <h3>
          <p
              class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]
               mb-4 block hover:text-primary"
          >
            {{ title + " - " + year}}
          </p>
        </h3>
        <p class="text-base text-body-color leading-relaxed mb-7">
          {{ desc }}
        </p>
        <div class="space-x-2 mt-auto">
          <div v-for="tag in tags" :key="tag" class="bg-azure px-3 py-1 font-semibold text-sm inline-flex rounded-full">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    year: String,
    link: String,
    desc: String,
    img: String,
    tags: Array,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
