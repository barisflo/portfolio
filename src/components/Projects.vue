<template>
  <div class="container p-0 md:p-10 md:p-2 md:px-20 m-auto">
    <h2 v-if="getCookie('lang') === 'eng'" class="text-3xl mt-6 mb-8 md:mt-10 md:mb-12 text-center">Featured Projects</h2>
    <h2 v-if="getCookie('lang') === 'kr'" class="text-3xl mt-6 mb-8 md:mt-10 md:mb-12 text-center">특징 프로젝트</h2>
    <div class="flex flex-wrap justify-center">
      <Card :img="PR" link="https://gamevrest.odoo.com/" cardtitle="Premier Servi" year="2023" v-bind:tags="['Unity', 'Content creation', 'AI']"
            desc="Premier Servi, use of AI generated assets, ongoing"
            descKR="Premier Servi, AI 생성 자산의 사용, 지속적인"/>
      <Card :img="Kresus" link="https://www.kresus.eu/" cardtitle="Kresus" year="2023" v-bind:tags="['Vue 3', 'TailwindCSS']"
            desc="Worked on Kresus Vue.js toolkit as a freelancer"
            descKR="프리랜서로 Kresus Vue.js 툴킷 작업"/>
      <Card :img="Artificial" link="https://www.youtube.com/@ARTificialVideo/videos" cardtitle="ArtificialVideo" year="2022" v-bind:tags="['AI', 'Javascript']"
            desc="Youtube channel (15k) with AI made videos, ongoing"
            descKR="AI가 만든 동영상이 있는 유튜브 채널(15k), 진행 중"/>
      <Card :img="Datanest" link="https://github.com/baris-f/PBWS-DataNFT" cardtitle="Datanest" year="2022" v-bind:tags="['Vue 3', 'TailwindCSS', 'Web 3']"
            desc="Decentalized Data marketplace using NFT access tokens"
            descKR="NFT 액세스 토큰을 사용한 디센트럴화된 데이터 마켓플레이스"/>
      <Card :img="Monolith" link="https://www.moonolith.io/" cardtitle="Moonolith" year="2022" v-bind:tags="['Vue 3', 'EtherJS', 'Web 3']"
            desc="Pixel grid wall, stored in a blockchain and sold with ETH"
            descKR="블록체인에 저장되고 ETH와 함께 판매되는 픽셀 그리드 벽"/>
      <Card :img="GamePipe" link="https://gamepipe.io/" cardtitle="GamePipe" year="2021" v-bind:tags="['Laravel', 'TailwindCSS']"
            desc="Website to play and host video games"
            descKR="비디오 게임을 플레이하고 호스팅하는 웹 사이트"/>
      <Card :img="Proxima" link="https://play.google.com/store/apps/details?id=com.gamevrest.proximaCities" cardtitle="Proxima Cities" year="2020" v-bind:tags="['Unity', 'C#']"
            desc="Augmented reality city, on mobile application"
            descKR="모바일 애플리케이션상의 증강현실 도시"/>
      <Card :img="BR" link="https://play.google.com/store/apps/details?id=com.InDustry.BarriersQuad&hl=en&gl=US" cardtitle="Barrier Squad" year="2019" v-bind:tags="['Unity', 'Android']"
            desc="Mobile Game, tower defense like, usage of AI generated images"
            descKR="모바일 게임, 타워 방어 같은 것"/>
      <Card :img="PCR" link="https://gamepipe.io/@barisf/pcr-defender" cardtitle="PCR Defender" year="2015" v-bind:tags="['Unity', 'C#']"
            desc="Promotional video game for C2i santé"
            descKR="C2isanté 홍보용 비디오 게임"/>
    </div>
  </div>
</template>


<script>
import Card from './Card.vue'
import {getCookie} from "@/cookie";
import PR from '@/assets/PremierServi.png';
import Kresus from '@/assets/Kresus.png';
import Artificial from '@/assets/Artificial.png';
import Datanest from '@/assets/datanest.png';
import Monolith from '@/assets/Monolith.png';
import PCR from '@/assets/PCRDefender.png';
import Proxima from '@/assets/Proxima.png';
import GamePipe from '@/assets/GamePipe.png';
import BR from '@/assets/BarrierSquad.png';

console.log(PR.toString());
export default {
  name: 'Projects',
  methods: {getCookie},
  components: {
    Card,
  },
  props: {
    msg: String
  },
  data(){
    return {
      PR : PR,
      Kresus : Kresus,
      Artificial : Artificial,
      Datanest : Datanest,
      Monolith : Monolith,
      PCR : PCR,
      Proxima : Proxima,
      GamePipe : GamePipe,
      BR : BR,
    }
  },
  mounted(){
    //this.PR = PR.toString();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
