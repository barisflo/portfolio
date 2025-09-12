<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Featured Projects' : '주요 프로젝트' }}
    </h2>

    <div class="space-y-6">
      <!-- Project 1 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="goToPortfolio">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'Barrier Squad - Mobile Tower Defense' : 'Barrier Squad - 모바일 타워 디펜스' }}
          </h3>
          <span class="text-gray-600 font-medium">2024</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Mobile tower defense game featuring AI-generated artwork and engaging gameplay mechanics. 
          Built for Android platform with Unity and C#.
        </p>
        <p v-else class="text-gray-700 mb-3">
          AI 생성 아트워크와 매력적인 게임플레이 메커니즘을 특징으로 하는 모바일 타워 디펜스 게임. 
          Unity와 C#로 Android 플랫폼용으로 제작.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Unity</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">C#</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Android</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">AI Art</span>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="goToPortfolio">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'Kresus Vue.js Toolkit' : 'Kresus Vue.js 툴킷' }}
          </h3>
          <span class="text-gray-600 font-medium">2023</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Contributed to the open-source Kresus personal finance management toolkit. 
          Enhanced UI components and improved user experience with modern Vue.js practices.
        </p>
        <p v-else class="text-gray-700 mb-3">
          오픈소스 Kresus 개인 금융 관리 툴킷에 기여. 
          현대적인 Vue.js 관행으로 UI 컴포넌트를 향상시키고 사용자 경험을 개선.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Vue.js</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">TailwindCSS</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Open Source</span>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="goToPortfolio">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'Datanest - Decentralized Data Marketplace' : 'Datanest - 탈중앙화 데이터 마켓플레이스' }}
          </h3>
          <span class="text-gray-600 font-medium">2022</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Web3 platform for trading data using NFT access tokens. Built with Vue.js frontend 
          and blockchain integration for secure, decentralized data transactions.
        </p>
        <p v-else class="text-gray-700 mb-3">
          NFT 액세스 토큰을 사용한 데이터 거래를 위한 Web3 플랫폼. Vue.js 프론트엔드와 
          안전한 탈중앙화 데이터 거래를 위한 블록체인 통합으로 구축.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Vue.js</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Web3</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Blockchain</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">NFT</span>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="goToPortfolio">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'ArtificialVideo YouTube Channel' : 'ArtificialVideo 유튜브 채널' }}
          </h3>
          <span class="text-gray-600 font-medium">2022 - {{ language === 'en' ? 'Present' : '현재' }}</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Successful YouTube channel with 15,000+ subscribers focused on AI-generated content. 
          Developed automated content generation workflows and managed community engagement.
        </p>
        <p v-else class="text-gray-700 mb-3">
          AI 생성 콘텐츠에 중점을 둔 15,000명 이상의 구독자를 보유한 성공적인 유튜브 채널. 
          자동화된 콘텐츠 생성 워크플로우를 개발하고 커뮤니티 참여를 관리.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">JavaScript</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">AI Tools</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Content Creation</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Automation</span>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="goToPortfolio">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'Moonolith - Blockchain Pixel Art' : 'Moonolith - 블록체인 픽셀 아트' }}
          </h3>
          <span class="text-gray-600 font-medium">2022</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Interactive pixel grid wall stored on blockchain and sold with ETH. 
          Combined creative digital art with blockchain technology for unique ownership experience.
        </p>
        <p v-else class="text-gray-700 mb-3">
          블록체인에 저장되고 ETH로 판매되는 상호작용 픽셀 그리드 벽. 
          독특한 소유권 경험을 위해 창의적인 디지털 아트와 블록체인 기술을 결합.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Vue.js</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">EtherJS</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Smart Contracts</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Digital Art</span>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="goToPortfolio">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'GamePipe - Gaming Platform' : 'GamePipe - 게이밍 플랫폼' }}
          </h3>
          <span class="text-gray-600 font-medium">2021</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Full-stack web platform for playing and hosting video games. 
          Built with Laravel backend and modern frontend for seamless gaming experience.
        </p>
        <p v-else class="text-gray-700 mb-3">
          비디오 게임을 플레이하고 호스팅하기 위한 풀스택 웹 플랫폼. 
          원활한 게임 경험을 위해 Laravel 백엔드와 현대적인 프론트엔드로 구축.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Laravel</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">PHP</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">TailwindCSS</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Gaming</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()

const goToPortfolio = () => {
  // Navigate to the main portfolio page where users can see all projects
  navigateTo('/#projects')
}
</script>
