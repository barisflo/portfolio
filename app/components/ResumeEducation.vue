<template>
  <section class="mb-8 education-section">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Education' : '학력' }}
    </h2>

    <div class="space-y-6">
      <!-- Education Item 1 - EPITECH MASTER -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'EPITECH - Master' : 'EPITECH - 석사' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2015 - 2020' : '2015 - 2020' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• PCE program in 5 years, intensive and complete programming</li>
          <li>• Languages C/C++/Web, project management</li>
          <li>• Business and start-up creation course</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 5년 PCE 프로그램, 집중적이고 완전한 프로그래밍</li>
          <li>• C/C++/Web 언어, 프로젝트 관리</li>
          <li>• 비즈니스 및 스타트업 창업 과정</li>
        </ul>
      </div>

      <!-- Education Item 2 - KEIMYUNG UNIVERSITY -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Keimyung University (South Korea)' : '계명대학교 (한국)' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? 'September 2018 - July 2019' : '2018년 9월 - 2019년 7월' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Courses on game engine Unity, Game design,project management</li>
          <li>• Conception of multiple mobile projects and games (C#, Java)</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• Unity 게임 엔진, 프로젝트 관리 과정</li>
          <li>• 다양한 모바일 프로젝트 및 게임 개념 설계 (C#, Java)</li>
        </ul>
      </div>

      <!-- Education Item 3 - CERTIFICATION TEACHING AND COACHING -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Certification Teaching and Coaching' : '교육 및 코칭 자격증' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2017 - 2018' : '2017 - 2018' }}
          </span>
        </div>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• 2 year formation in pedagogy</li>
          <li>• Management theory study and practical application as Epitech Assistant</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 2년 교육학 과정</li>
          <li>• 관리 이론 연구 및 Epitech 조교로서의 실무 적용</li>
        </ul>
      </div>
    </div>

    <!-- Certifications Section -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-prussianBlue mb-4">
        {{ language === 'en' ? 'Certifications & Training' : '자격증 & 교육' }}
      </h3>
      <div class="space-y-3">
        <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            <a href="https://klec.sogang.ac.kr/" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Sogang Korean Language Program - Level 6' : '서강대학교 한국어교육원 - 6급' }}
            </a>
          </span>
          <span class="text-gray-600">2024 - 2025</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            <a href="https://masteringnuxt.com/nuxt3" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Mastering Nuxt 3 - Complete Course' : 'Mastering Nuxt 3 - 완전한 과정' }}
            </a>
          </span>
          <span class="text-gray-600">2023</span>
        </div>
        <!-- <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            <a href="https://www.ionis-stm.com" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Teaching & Coaching Formation - Ionis-STM' : '교육 & 코칭 과정 - Ionis-STM' }}
            </a>
          </span>
          <span class="text-gray-600">2018</span>
        </div> -->
      </div>
    </div>
  </section>

  <!-- Compact Education for Print -->
  <section class="mb-8 education-compact" style="display: none;">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Education' : '학력' }}
    </h2>
    <ul v-if="language === 'en'" class="text-gray-700">
      <li>• EPITECH - Master (Programming) 2015 - 2020</li>
      <li>• Keimyung University - South Korea (Exchange Program) September 2018 - July 2019</li>
    </ul>
    <ul v-else class="text-gray-700">
      <li>• EPITECH - 석사 (프로그래밍) 2015 - 2020</li>
      <li>• 계명대학교 - 한국 (교환 프로그램) 2018년 9월 - 2019년 7월</li>
    </ul>

    <!-- Compact Certifications -->
    <div class="mt-6">
      <h3 class="text-xl font-semibold text-prussianBlue mb-4">
        {{ language === 'en' ? 'Certifications & Training' : '자격증 & 교육' }}
      </h3>
      <ul v-if="language === 'en'" class="text-gray-700">
        <li>• Sogang Korean Language Program - Level 6 (2024 - 2025)</li>
        <li>• Mastering Nuxt 3 - Complete Course (2023)</li>
        <!-- <li>• Teaching & Coaching Formation - Ionis-STM (2018)</li> -->
      </ul>
      <ul v-else class="text-gray-700">
        <li>• 서강대학교 한국어교육원 - 6급 (2024 - 2025)</li>
        <li>• Mastering Nuxt 3 - 완전한 과정 (2023)</li>
        <!-- <li>• 교육 & 코칭 과정 - Ionis-STM (2018)</li> -->
      </ul>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
</script>
