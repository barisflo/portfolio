<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Professional Experience' : '경력' }}
    </h2>

    <div class="space-y-6">
      <!-- Experience Item 1 - FromTheRed -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2 experience-header">
          <div class="experience-title-company">
            <h3 class="text-xl font-semibold text-prussianBlue inline">
              {{ language === 'en' ? 'PM - Frontend Developer' : '프로젝트 매니저 - 프론트엔드 개발자' }}
            </h3>
            <span class="text-celadonBlue font-medium">
              - <a href="https://fromthered.com" target="_blank" rel="noopener noreferrer" class="hover:underline">
                FromTheRed {{ language === 'en' ? '(Korean Company)' : '(한국 회사)' }}
              </a>
            </span>
          </div>
          <span class="text-gray-600 font-medium experience-date">
            {{ language === 'en' ? '2024 - Present' : '2024 - 현재' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• <a href="https://zempie.com" target="_blank" rel="noopener noreferrer" class="text-celadonBlue hover:underline">Zempie Website</a>, as a developer and PM Nuxt.js / TailwindCSS</li>
          <li>• Indie game developer related events organization and management</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• <a href="https://zempie.com" target="_blank" rel="noopener noreferrer" class="text-celadonBlue hover:underline">Zempie Website</a>를 개발 및 PM, Nuxt.js / TailwindCSS</li>
          <li>• 이벤트 및 인디 게임 개발자 관련 이벤트 조직 및 관리</li>
        </ul>
      </div>

      <!-- Experience Item 2 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2 experience-header">
          <div class="experience-title-company">
            <h3 class="text-xl font-semibold text-prussianBlue inline">
              {{ language === 'en' ? 'Freelance Fullstack Developer' : '프리랜스 풀스택 개발자' }}
            </h3>
            <span class="text-celadonBlue font-medium">
              - {{ language === 'en' ? 'Self-Employed' : '개인 사업' }}
            </span>
          </div>
          <span class="text-gray-600 font-medium experience-date">
            {{ language === 'en' ? '2022 - 2024' : '2022 - 2024' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• <a href="https://www.kresus.eu/" target="_blank" rel="noopener noreferrer" class="text-celadonBlue hover:underline">Kresus</a> UI toolkit using storybook, Nuxt.js / TailwindCSS</li>
          <li>• AI images related projects</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• <a href="https://www.kresus.eu/" target="_blank" rel="noopener noreferrer" class="text-celadonBlue hover:underline">Kresus</a> UI 툴킷, 스토리북, Nuxt.js / TailwindCSS 사용</li>
          <li>• AI 이미지 관련 프로젝트</li>
        </ul>
      </div>

      <!-- Experience Item 3 - EPITECH DIGITAL -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2 experience-header">
          <div class="experience-title-company">
            <h3 class="text-xl font-semibold text-prussianBlue inline">
              {{ language === 'en' ? 'Pedagogic Teacher' : '교육 교사' }}
            </h3>
            <span class="text-celadonBlue font-medium">
              - {{ language === 'en' ? 'EPITECH DIGITAL (CDI)' : 'EPITECH DIGITAL (정규직)' }}
            </span>
          </div>
          <span class="text-gray-600 font-medium experience-date">
            {{ language === 'en' ? 'September 2020 - June 2022' : '2020년 9월 - 2022년 6월' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Active in the creation of the school, Management of a small team, Agile Methods</li>
          <li>• Teaching in programming and Digital Transformation, Workshops (JS / C#)</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 학교 설립에 적극적으로 참여, 소규모 팀 관리, 애자일 방법론 사용</li>
          <li>• 워크샵 및 콘텐츠 제작 (JS / C#)</li>
        </ul>
      </div>

      <!-- Experience Item 4 - AGILE PARTNER -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2 experience-header">
          <div class="experience-title-company">
            <h3 class="text-xl font-semibold text-prussianBlue inline">
              {{ language === 'en' ? 'Developer and Agile Trainee' : '개발자 및 애자일 연수생' }}
            </h3>
            <span class="text-celadonBlue font-medium">
              - {{ language === 'en' ? 'Agile Partner (Internship)' : 'Agile Partner (인턴십)' }}
            </span>
          </div>
          <span class="text-gray-600 font-medium experience-date">
            {{ language === 'en' ? 'April 2018 - August 2018' : '2018년 4월 - 2018년 8월' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Back-end developer C#. Profile manager and CV generator</li>
          <li>• Multiple formations to agile methods, and practical application</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• C# 백엔드 개발자. 프로필 관리자 및 CV 생성기</li>
          <li>• 애자일 방법론에 대한 다양한 교육 및 실무 적용</li>
        </ul>
      </div>

      <!-- Experience Item 5 - C2I SANTÉ -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2 experience-header">
          <div class="experience-title-company">
            <h3 class="text-xl font-semibold text-prussianBlue inline">
              {{ language === 'en' ? 'Mobile Fullstack Developer' : '모바일 풀스택 개발자' }}
            </h3>
            <span class="text-celadonBlue font-medium">
              - {{ language === 'en' ? 'C2I Santé (Internship)' : 'C2I Santé (인턴십)' }}
            </span>
          </div>
          <span class="text-gray-600 font-medium experience-date">
            {{ language === 'en' ? 'July 2016 - December 2016' : '2016년 7월 - 2016년 12월' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• C# Application with Unity. Promotional video game, from concept to deployment</li>
          <li>• Design and publishing of an Android / iOS app</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• Unity를 사용한 C# 애플리케이션. 컨셉부터 배포까지 홍보용 비디오 게임</li>
          <li>• 안드로이드 / iOS 앱 디자인</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
</script>
