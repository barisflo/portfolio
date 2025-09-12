<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Professional Experience' : '경력' }}
    </h2>

    <div class="space-y-6">
      <!-- Experience Item 1 - FromTheRed -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Fullstack Developer' : '풀스택 개발자' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2024 - Present' : '2024 - 현재' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          <a href="https://fromthered.com" target="_blank" rel="noopener noreferrer" class="hover:underline">
            FromTheRed
          </a>
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Developed and maintained web applications using modern JavaScript frameworks</li>
          <li>• Collaborated with cross-functional teams on digital transformation projects</li>
          <li>• Implemented responsive designs and optimized user experience</li>
          <li>• Worked on both frontend and backend development tasks</li>
          <li>• Contributed to code reviews and maintained high code quality standards</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 현대적인 JavaScript 프레임워크를 사용한 웹 애플리케이션 개발 및 유지보수</li>
          <li>• 디지털 변환 프로젝트에서 다기능 팀과 협력</li>
          <li>• 반응형 디자인 구현 및 사용자 경험 최적화</li>
          <li>• 프론트엔드 및 백엔드 개발 업무 수행</li>
          <li>• 코드 리뷰에 기여하고 높은 코드 품질 기준 유지</li>
        </ul>
      </div>

      <!-- Experience Item 2 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Freelance Fullstack Developer' : '프리랜스 풀스택 개발자' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2022 - 2024' : '2022 - 2024' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          {{ language === 'en' ? 'Self-Employed' : '개인 사업' }}
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Developed multiple web applications using Vue.js, Nuxt.js, and modern JavaScript frameworks</li>
          <li>• Created mobile games and applications using Unity and C#</li>
          <li>• Implemented responsive designs with TailwindCSS and modern CSS techniques</li>
          <li>• Worked on blockchain and Web3 projects including NFT marketplaces</li>
          <li>• Collaborated with clients on digital transformation initiatives</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• Vue.js, Nuxt.js 및 현대적인 JavaScript 프레임워크를 사용한 웹 애플리케이션 개발</li>
          <li>• Unity와 C#을 사용한 모바일 게임 및 애플리케이션 제작</li>
          <li>• TailwindCSS와 현대적인 CSS 기법을 활용한 반응형 디자인 구현</li>
          <li>• NFT 마켓플레이스를 포함한 블록체인 및 Web3 프로젝트 작업</li>
          <li>• 고객과의 디지털 변환 이니셔티브 협력</li>
        </ul>
      </div>

      <!-- Experience Item 3 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Vue.js Developer' : 'Vue.js 개발자' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2023' : '2023' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          <a href="https://kresus.org" target="_blank" rel="noopener noreferrer" class="hover:underline">
            {{ language === 'en' ? 'Kresus (Freelance)' : 'Kresus (프리랜스)' }}
          </a>
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Contributed to Kresus Vue.js toolkit development</li>
          <li>• Implemented modern UI components with Vue 3 and TailwindCSS</li>
          <li>• Collaborated with the open-source community</li>
          <li>• Enhanced user experience and interface responsiveness</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• Kresus Vue.js 툴킷 개발에 기여</li>
          <li>• Vue 3와 TailwindCSS를 사용한 현대적인 UI 컴포넌트 구현</li>
          <li>• 오픈소스 커뮤니티와의 협력</li>
          <li>• 사용자 경험 및 인터페이스 반응성 향상</li>
        </ul>
      </div>

      <!-- Experience Item 4 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Content Creator & Developer' : '콘텐츠 크리에이터 & 개발자' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2022 - Present' : '2022 - 현재' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          <a href="https://youtube.com/@ArtificialVideo" target="_blank" rel="noopener noreferrer" class="hover:underline">
            {{ language === 'en' ? 'ArtificialVideo YouTube Channel' : 'ArtificialVideo 유튜브 채널' }}
          </a>
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Built and maintained a YouTube channel with 15,000+ subscribers</li>
          <li>• Created AI-generated video content using cutting-edge tools</li>
          <li>• Developed automated content generation workflows with JavaScript</li>
          <li>• Managed content strategy and audience engagement</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 15,000명 이상의 구독자를 보유한 유튜브 채널 구축 및 유지</li>
          <li>• 최첨단 도구를 사용한 AI 생성 비디오 콘텐츠 제작</li>
          <li>• JavaScript를 활용한 자동화된 콘텐츠 생성 워크플로우 개발</li>
          <li>• 콘텐츠 전략 및 오디언스 참여 관리</li>
        </ul>
      </div>

      <!-- Experience Item 5 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Game Developer' : '게임 개발자' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2015 - Present' : '2015 - 현재' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          {{ language === 'en' ? 'Various Game Jams & Projects' : '다양한 게임 잼 & 프로젝트' }}
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Participated in 10+ game jams over multiple years</li>
          <li>• Developed games using Unity and C# for various platforms</li>
          <li>• Created promotional and educational games for companies</li>
          <li>• Collaborated in multidisciplinary teams as programmer and game designer</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 다년간 10개 이상의 게임 잼에 참여</li>
          <li>• Unity와 C#을 사용하여 다양한 플랫폼용 게임 개발</li>
          <li>• 기업을 위한 홍보 및 교육용 게임 제작</li>
          <li>• 프로그래머 및 게임 디자이너로서 다학제 팀에서 협력</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
</script>
