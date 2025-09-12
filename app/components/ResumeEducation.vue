<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Education' : '학력' }}
    </h2>

    <div class="space-y-6">
      <!-- Education Item 1 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Master of Engineering in Computer Science' : '컴퓨터 과학 공학 석사' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2018 - 2021' : '2018 - 2021' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          {{ language === 'en' ? 'Engineering School, France' : '프랑스 공과대학' }}
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Specialized in Software Engineering and Digital Transformation</li>
          <li>• Focus on Agile methodologies and project management</li>
          <li>• Advanced coursework in web development and mobile applications</li>
          <li>• Thesis on modern web frameworks and user experience</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 소프트웨어 엔지니어링 및 디지털 변환 전공</li>
          <li>• 애자일 방법론 및 프로젝트 관리 중점</li>
          <li>• 웹 개발 및 모바일 애플리케이션 고급 과정</li>
          <li>• 현대 웹 프레임워크 및 사용자 경험에 관한 논문</li>
        </ul>
      </div>

      <!-- Education Item 2 -->
      <div class="border-l-4 border-celadonBlue pl-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 class="text-xl font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Bachelor of Science in Computer Science' : '컴퓨터 과학 학사' }}
          </h3>
          <span class="text-gray-600 font-medium">
            {{ language === 'en' ? '2015 - 2018' : '2015 - 2018' }}
          </span>
        </div>
        <p class="text-celadonBlue font-medium mb-3">
          {{ language === 'en' ? 'University, France' : '프랑스 대학교' }}
        </p>
        <ul v-if="language === 'en'" class="text-gray-700 space-y-2">
          <li>• Fundamental computer science concepts and programming</li>
          <li>• Data structures, algorithms, and software architecture</li>
          <li>• Database design and management systems</li>
          <li>• Introduction to game development and Unity</li>
        </ul>
        <ul v-else class="text-gray-700 space-y-2">
          <li>• 기본적인 컴퓨터 과학 개념 및 프로그래밍</li>
          <li>• 데이터 구조, 알고리즘, 소프트웨어 아키텍처</li>
          <li>• 데이터베이스 설계 및 관리 시스템</li>
          <li>• 게임 개발 및 Unity 입문</li>
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
            {{ language === 'en' ? 'Agile & Scrum Methodology' : '애자일 & 스크럼 방법론' }}
          </span>
          <span class="text-gray-600">2021</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            {{ language === 'en' ? 'Advanced Vue.js Development' : '고급 Vue.js 개발' }}
          </span>
          <span class="text-gray-600">2022</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            {{ language === 'en' ? 'Unity Certified Developer' : 'Unity 공인 개발자' }}
          </span>
          <span class="text-gray-600">2020</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            {{ language === 'en' ? 'Digital Transformation Leadership' : '디지털 변환 리더십' }}
          </span>
          <span class="text-gray-600">2021</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <span class="font-medium text-gray-800">
            <a href="https://korean.sogang.ac.kr" target="_blank" rel="noopener noreferrer" class="hover:underline">
              {{ language === 'en' ? 'Sogang Korean Language Program - Level 6' : '서강대학교 한국어교육원 - 6급' }}
            </a>
          </span>
          <span class="text-gray-600">2024</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
</script>
