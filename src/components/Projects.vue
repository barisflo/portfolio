<template>
  <div class="container p-0 md:p-10 md:p-2 md:px-20 m-auto">
    <h2 class="text-3xl mt-6 mb-8 md:mt-10 md:mb-12 text-center">My Projects</h2>
    <div class="flex flex-wrap justify-center">
      <Card img="datanest.png" link="https://github.com/baris-f/PBWS-DataNFT" title="Datanest" year="2022" v-bind:tags="['Vue 3', 'TailwindCSS', 'Web 3']"
            desc="Decentalized Data marketplace using NFT access tokens"/>
      <Card img="ethernal.png" link="https://github.com/whiterqbbit/Ethernal" title="Ethernal" year="2022" v-bind:tags="['Vue 3', 'EtherJS', 'Web 3']"
            desc="Pixel grid wall, stored in a blockchain and sold with ETH"/>
      <Card img="GamePipe.png" link="https://gamepipe.io/" title="GamePipe" year="2021" v-bind:tags="['Laravel', 'TailwindCSS']"
            desc="Website to play and host video games"/>
      <Card img="proxima.png" link="https://play.google.com/store/apps/details?id=com.gamevrest.proximaCities" title="Proxima Cities" year="2020" v-bind:tags="['Unity', 'C#']"
            desc="Augmented reality city, on mobile application"/>
      <Card img="BarrierSquad.png" link="https://play.google.com/store/apps/details?id=com.InDustry.BarriersQuad&hl=en&gl=US" title="Barrier Squad" year="2019" v-bind:tags="['Unity', 'Android']"
            desc="Mobile Game, tower defense like"/>
      <Card img="PCRDefender.png" link="https://gamepipe.io/@barisf/pcr-defender" title="PCR Defender" year="2015" v-bind:tags="['Unity', 'C#']"
            desc="Promotional video game for C2i santé"/>
    </div>
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
