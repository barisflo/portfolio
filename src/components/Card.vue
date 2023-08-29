<template>
  <div class="w-80 md:px-4">
    <a @click="showModal" class="cursor-pointer">
    <div class=" md:w-20rem shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105
    bg-white rounded-lg overflow-hidden mb-10">
      <div class="h-60 overflow-hidden">
        <img
            :src="img"
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
            {{ cardtitle + " - " + year}}
          </p>
        </h3>
        <p v-if="getCookie('lang') === 'eng'" class="text-base text-body-color leading-relaxed mb-7">
          {{ desc }}
        </p>
        <p v-if="getCookie('lang') === 'kr'" class="text-base text-body-color leading-relaxed mb-7">
          {{ descKR }}
        </p>
        <div class="space-x-2 mt-auto">
          <div v-for="tag in tags" :key="tag" class="bg-azure px-3 py-1 font-semibold text-sm inline-flex rounded-full">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    </a>
    <Modal :modal="cardtitle" :link="link" :year="year" :desc="desc" :img="img" :tags="tags" :descKR="descKR">
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import {getCookie} from "@/cookie";

export default {
  name: 'Card',
  components: {
    Modal,
  },
  props: {
    cardtitle: String,
    year: String,
    link: String,
    desc: String,
    descKR: String,
    img: String,
    tags: Array,
  },
  mounted(){
  },
  methods: {
    getCookie,
    showModal(){
      document.getElementById(this.cardtitle).showModal();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
