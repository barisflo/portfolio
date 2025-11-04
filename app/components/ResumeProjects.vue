<template>
  <section class="mb-8 projects-section">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Featured Projects' : '주요 프로젝트' }}
    </h2>

    <div class="space-y-6">
      <!-- Project 1 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openMessyKingdom">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://poki.com/en/g/messy-kingdom-35605720" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Messy Kingdom - Puzzle Adventure' : 'Messy Kingdom - 퍼즐 어드벤처' }}
            </a>
          </h3>
          <span class="text-gray-600 font-medium">2025</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Colorful puzzle adventure game featuring strategic gameplay and creative problem-solving. 
          Published on Poki platform with optimized WebGL performance.
        </p>
        <p v-else class="text-gray-700 mb-3">
          전략적 게임플레이와 창의적 문제 해결을 특징으로 하는 다채로운 퍼즐 어드벤처 게임. 
          최적화된 WebGL 성능으로 Poki 플랫폼에 게시.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Unity</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">WebGL</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Poki</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Puzzle</span>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openPremierServi">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://store.steampowered.com/app/2884670/Premier_Servi/" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Premier Servi - Party Game' : 'Premier Servi - 파티 게임' }}
            </a>
          </h3>
          <span class="text-gray-600 font-medium">2025</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Colorful party mind game featuring delicious French pastry. Race to eat cakes before your friends 
          without getting spotted in this 2-4 player local multiplayer game.
        </p>
        <p v-else class="text-gray-700 mb-3">
          맛있는 프랑스 페이스트리를 특징으로 하는 화려한 파티 마인드 게임. 
          2-4인 로컬 멀티플레이어 게임에서 들키지 않고 친구들보다 먼저 케이크를 먹기 위해 경주.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Unity</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Steam</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Party Game</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Local Multiplayer</span>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openBarrierSquad">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://play.google.com/store/apps/details?id=com.gamevrest.BarriersQuad" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Barrier Squad - Mobile Tower Defense' : 'Barrier Squad - 모바일 타워 디펜스' }}
            </a>
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

      <!-- Project 4 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openKresus">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://www.kresus.eu/" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Kresus Vue.js Toolkit' : 'Kresus Vue.js 툴킷' }}
            </a>
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
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openDatanest">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://github.com/baris-f/PBWS-DataNFT" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Datanest - Decentralized Data Marketplace' : 'Datanest - 탈중앙화 데이터 마켓플레이스' }}
            </a>
          </h3>
          <span class="text-gray-600 font-medium">2022</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Web3 platform for trading data using NFT access tokens. Built with Vue.js frontend 
          and simple blockchain integration.
        </p>
        <p v-else class="text-gray-700 mb-3">
          NFT 액세스 토큰을 사용한 데이터 거래를 위한 Web3 플랫폼. Vue.js 프론트엔드와 
          간단한 블록체인 통합으로 구축.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Vue.js</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Web3</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Blockchain</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">NFT</span>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openArtificialVideo">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://www.youtube.com/@ARTificialVideo/videos" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'artificialVideo - Freelance / Youtube' : 'artificialVideo - 프리랜스 / 유튜브' }}
            </a>
          </h3>
          <span class="text-gray-600 font-medium">2022 - {{ language === 'en' ? 'Present' : '현재' }}</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Developed automated content generation workflows and developed a Fiverr activity to sell AI generated images.
          YouTube channel with 15,000+ subscribers focused on AI-generated content.
        </p>
        <p v-else class="text-gray-700 mb-3">
          자동화된 콘텐츠 생성 워크플로우를 개발하고 AI 생성 이미지를 판매하는 Fiverr 활동을 개발.
          AI 생성 콘텐츠에 중점을 둔 15,000명 이상의 구독자를 보유한 유튜브 채널.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">JavaScript</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">AI Tools</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Content Creation</span>
          <span class="bg-azure px-3 py-1 text-sm rounded-full text-celadonBlue font-medium">Automation</span>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openMoonolith">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://www.moonolith.io/" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Moonolith - Blockchain Pixel Art' : 'Moonolith - 블록체인 픽셀 아트' }}
            </a>
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
      <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer" @click="openGamePipe">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 class="text-xl font-semibold text-prussianBlue hover:text-celadonBlue transition-colors">
            <a href="https://gamepipe.io/" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'GamePipe - Gaming Platform' : 'GamePipe - 게이밍 플랫폼' }}
            </a>
          </h3>
          <span class="text-gray-600 font-medium">2021</span>
        </div>
        <p v-if="language === 'en'" class="text-gray-700 mb-3">
          Full-stack web platform for playing and hosting video games. 
          Built with Laravel backend and TailwindCSS.
        </p>
        <p v-else class="text-gray-700 mb-3">
          비디오 게임을 플레이하고 호스팅하기 위한 풀스택 웹 플랫폼. 
          Laravel 백엔드와 TailwindCSS로 구축.
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

  <!-- Compact Projects for Print -->
  <section class="mb-8 projects-compact" style="display: none;">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Featured Projects' : '주요 프로젝트' }}
    </h2>
    <ul v-if="language === 'en'" class="text-gray-700">
      <li>• Messy Kingdom - Puzzle Adventure (Unity, WebGL, Poki, Puzzle) 2025</li>
      <li>• Premier Servi - Party Game (Unity, Steam, Party Game, Local Multiplayer) 2025</li>
      <li>• Barrier Squad - Mobile Tower Defense (Unity, C#, Android, AI Art) 2024</li>
      <li>• Kresus Vue.js Toolkit (Vue.js, TailwindCSS, Open Source) 2023</li>
      <li>• Datanest - Decentralized Data Marketplace (Vue.js, Web3, Blockchain, NFT) 2022</li>
      <li>• artificialVideo - Freelance / Youtube (JavaScript, AI Tools, Content Creation, Automation) 2022 - Present</li>
      <li>• Moonolith - Blockchain Pixel Art (Vue.js, EtherJS, Smart Contracts, Digital Art) 2022</li>
      <li>• GamePipe - Gaming Platform (Laravel, PHP, TailwindCSS, Gaming) 2021</li>
    </ul>
    <ul v-else class="text-gray-700">
      <li>• Messy Kingdom - 퍼즐 어드벤처 (Unity, WebGL, Poki, Puzzle) 2025</li>
      <li>• Premier Servi - 파티 게임 (Unity, Steam, Party Game, Local Multiplayer) 2025</li>
      <li>• Barrier Squad - 모바일 타워 디펜스 (Unity, C#, Android, AI Art) 2024</li>
      <li>• Kresus Vue.js 툴킷 (Vue.js, TailwindCSS, Open Source) 2023</li>
      <li>• Datanest - 탈중앙화 데이터 마켓플레이스 (Vue.js, Web3, Blockchain, NFT) 2022</li>
      <li>• artificialVideo - 프리랜스 / 유튜브 (JavaScript, AI Tools, Content Creation, Automation) 2022 - 현재</li>
      <li>• Moonolith - 블록체인 픽셀 아트 (Vue.js, EtherJS, Smart Contracts, Digital Art) 2022</li>
      <li>• GamePipe - 게이밍 플랫폼 (Laravel, PHP, TailwindCSS, Gaming) 2021</li>
    </ul>
  </section>
</template>

<script setup>
const { language } = useLanguage()

const openMessyKingdom = () => {
  window.open('https://poki.com/en/g/messy-kingdom-35605720', '_blank')
}

const openPremierServi = () => {
  window.open('https://store.steampowered.com/app/2884670/Premier_Servi/', '_blank')
}

const openBarrierSquad = () => {
  window.open('https://play.google.com/store/apps/details?id=com.gamevrest.BarriersQuad', '_blank')
}

const openKresus = () => {
  window.open('https://www.kresus.eu/', '_blank')
}

const openDatanest = () => {
  window.open('https://github.com/baris-f/PBWS-DataNFT', '_blank')
}

const openArtificialVideo = () => {
  window.open('https://www.youtube.com/@ARTificialVideo/videos', '_blank')
}

const openMoonolith = () => {
  window.open('https://www.moonolith.io/', '_blank')
}

const openGamePipe = () => {
  window.open('https://gamepipe.io/', '_blank')
}
</script>
