<template>
  <div class="container p-0 md:p-10 md:p-2 md:px-20 m-auto">
    <h2 class="text-3xl mt-6 mb-8 md:mt-10 md:mb-12 text-center">My Projects</h2>
    <div class="flex flex-wrap justify-center">
      <Card img="datanest.png" link="https://github.com/baris-f/PBWS-DataNFT" cardtitle="Datanest" year="2022" v-bind:tags="['Vue 3', 'TailwindCSS', 'Web 3']"
            desc="NFT 액세스 토큰을 사용한 디센트럴화된 데이터 마켓플레이스"/>
      <Card img="ethernal.png" link="https://github.com/whiterqbbit/Ethernal" cardtitle="Ethernal" year="2022" v-bind:tags="['Vue 3', 'EtherJS', 'Web 3']"
            desc="블록체인에 저장되고 ETH와 함께 판매되는 픽셀 그리드 벽"/>
      <Card img="GamePipe.png" link="https://gamepipe.io/" cardtitle="GamePipe" year="2021" v-bind:tags="['Laravel', 'TailwindCSS']"
            desc="비디오 게임을 플레이하고 호스팅하는 웹 사이트"/>
      <Card img="proxima.png" link="https://play.google.com/store/apps/details?id=com.gamevrest.proximaCities" cardtitle="Proxima Cities" year="2020" v-bind:tags="['Unity', 'C#']"
            desc="모바일 애플리케이션상의 증강현실 도시"/>
      <Card img="BarrierSquad.png" link="https://play.google.com/store/apps/details?id=com.InDustry.BarriersQuad&hl=en&gl=US" cardtitle="Barrier Squad" year="2019" v-bind:tags="['Unity', 'Android']"
            desc="모바일 게임, 타워 방어 같은 것"/>
      <Card img="PCRDefender.png" link="https://gamepipe.io/@barisf/pcr-defender" cardtitle="PCR Defender" year="2015" v-bind:tags="['Unity', 'C#']"
            desc="C2isanté 홍보용 비디오 게임"/>
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
