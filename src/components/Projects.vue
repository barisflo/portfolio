<template>
  <div class="container p-0 md:p-10 md:p-2 md:px-20 m-auto">
    <h2 v-if="getCookie('lang') === 'eng'" class="text-3xl mt-6 mb-8 md:mt-10 md:mb-12 text-center">Featured Projects</h2>
    <h2 v-if="getCookie('lang') === 'kr'" class="text-3xl mt-6 mb-8 md:mt-10 md:mb-12 text-center">특징 프로젝트</h2>
    <div class="flex flex-wrap justify-center">
      <Card :img="PR" link="https://gamevrest.com/" cardtitle="Premier Servi" year="2023" v-bind:tags="['Unity', 'Content creation', 'AI']"
            desc="Premier Servi, use of AI generated assets, ongoing"
            descKR="Premier Servi, AI 생성 자산의 사용, 지속적인"
            longdesc="Premier servi is (First Arrived, First Served) is a colorful Party Game featuring delicious French Pastry ! Made with Unity C#, I am responsible for the game design, marketing, project management and part of the programming / assets"
            longdescKR="Premier servi는 (First Arrived, First Served) 프랑스 페이스트리를 특징으로 하는 화려한 파티 게임입니다! Unity C#로 제작되었으며, 게임 디자인, 마케팅, 프로젝트 관리 및 일부 프로그래밍 / 자산을 담당했습니다"
            />
      <Card :img="Kresus" link="https://www.kresus.eu/" cardtitle="Kresus" year="2023" v-bind:tags="['Vue 3', 'TailwindCSS']"
            desc="Worked on Kresus Vue.js toolkit as a freelancer"
            descKR="프리랜서로 Kresus Vue.js 툴킷 작업"
            longdesc="I worked on a UI toolkit they re-used on their website in vue.js, using storybook and providing highly customizable and re-usable components"
            longdescKR="Vue.js에서 스토리북을 사용하여 매우 커스터마이징 가능하고 재사용 가능한 구성 요소를 제공하는 UI 툴킷을 작업했습니다."
            />
      <Card :img="Artificial" link="https://www.youtube.com/@ARTificialVideo/videos" cardtitle="ArtificialVideo" year="2022" v-bind:tags="['AI', 'Javascript']"
            desc="Youtube channel (15k) with AI made videos, ongoing"
            descKR="AI가 만든 동영상이 있는 유튜브 채널(15k), 진행 중"
            longdesc="Made an automated process with midjourney to create videos, and managed over 30 orders on fiverr for images by AI related request"
            longdescKR="Midjourney를 사용하여 비디오를 자동으로 생성하는 프로세스를 만들었고, AI 관련 요청으로 Fiverr에서 30건 이상의 주문을 관리했습니다"/>
      <Card :img="Datanest" link="https://github.com/baris-f/PBWS-DataNFT" cardtitle="Datanest" year="2022" v-bind:tags="['Vue 3', 'TailwindCSS', 'Web 3']"
            desc="Decentalized Data marketplace using NFT access tokens"
            descKR="NFT 액세스 토큰을 사용한 디센트럴화된 데이터 마켓플레이스"
            longdesc="Made during the Paris Blockchain Week Submit Hackathon with a team of 5"
            longdescKR="5인 팀과 함께 Paris Blockchain Week Submit 해커톤에서 제작했습니다"/>
      <Card :img="Monolith" link="https://www.moonolith.io/" cardtitle="Moonolith" year="2022" v-bind:tags="['Vue 3', 'EtherJS', 'Web 3']"
            desc="Pixel grid wall, stored in a blockchain and sold with ETH"
            descKR="블록체인에 저장되고 ETH와 함께 판매되는 픽셀 그리드 벽"
            longdesc="Helped Florent Tavernier to make his first web3 project, the front-end part mainly"
            longdescKR="Florent Tavernier가 그의 첫 웹3 프로젝트를 만들도록 도왔으며, 주로 프론트엔드 부분을 담당했습니다"/>
      <Card :img="GamePipe" link="https://gamepipe.io/" cardtitle="GamePipe" year="2021" v-bind:tags="['Laravel', 'TailwindCSS']"
            desc="Website to play and host video games"
            descKR="비디오 게임을 플레이하고 호스팅하는 웹 사이트"
            longdesc="Website made to be the 'youtube of video games', allowing anyone to post a webgl game, play and rate other games"
            longdescKR="누구나 웹글 게임을 게시하고, 다른 게임을 플레이하고 평가할 수 있도록 하는 '비디오 게임의 유튜브'를 목표로 한 웹사이트를 만들었습니다"/>
      <Card :img="Proxima" link="https://www.youtube.com/watch?v=HJnT_nsFjWY" cardtitle="Proxima Cities" year="2020" v-bind:tags="['Unity', 'C#']"
            desc="Augmented reality city, on mobile application"
            descKR="모바일 애플리케이션상의 증강현실 도시"
            longdesc="Student project made as a team of 5, game design and project management, Unity"
            longdescKR="Unity를 사용하여 5인 팀으로 만든 학생 프로젝트입니다. 게임 디자인과 프로젝트 관리를 담당했습니다"
            />
      <Card :img="BR" link="https://gamepipe.io/@barisf/barrier-squad" cardtitle="Barrier Squad" year="2019" v-bind:tags="['Unity', 'Android']"
            desc="Mobile Game, tower defense like, usage of AI generated images"
            descKR="모바일 게임, 타워 방어 같은 것"
            longdesc="My first relatively ambitious mobile game project I keep updating as I gein knowledge in game development"
            longdescKR="게임 개발 지식을 얻으면서 계속 업데이트한 첫 번째 비교적 야심찬 모바일 게임 프로젝트입니다"/>
      <Card :img="PCR" link="https://gamepipe.io/@barisf/pcr-defender" cardtitle="PCR Defender" year="2015" v-bind:tags="['Unity', 'C#']"
            desc="Promotional video game for C2i santé"
            descKR="C2isanté 홍보용 비디오 게임"
            longdesc="Small game made for an event, then extended to a full mobile game inspired by jetpack joyride. Score, lesson, shops, lootbox, levels, 100% made alone"
            longdescKR="이벤트를 위해 제작된 작은 게임으로, 나중에 jetpack joyride에서 영감을 받아 전체 모바일 게임으로 확장되었습니다. 점수, 교훈, 상점, 루트박스, 레벨, 100% 혼자 만들었습니다"/>
      <Card :img="GJ" link="https://globalgamejam.org/users/barisf" cardtitle="Game Jams" year="2015 to Now" v-bind:tags="['Unity', 'C#', 'GD', '...']"
            desc="Game Jams for over 10 years, multiple roles"
            descKR="10년이 넘는 게임잼, 여러 역할"
            longdesc="Multiple game jams moslty Global game jam, for now over10 years in a row. Almost every role covered over the years https://v3.globalgamejam.org/users/barisf"
            longdescKR="주로 Global Game Jam에서 여러 게임 잼을 진행했습니다. 현재까지 10년 연속으로 참여하고 있으며, 거의 모든 역할을 수행했습니다  https://v3.globalgamejam.org/users/barisf"/>
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
import GJ from '@/assets/gamejam.png';

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
      GJ: GJ
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
