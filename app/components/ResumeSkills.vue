<template>
  <section class="mb-8">
    <h2 class="text-2xl font-bold text-prussianBlue border-b border-celadonBlue pb-2 mb-6">
      {{ language === 'en' ? 'Technical Skills' : '기술 스킬' }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Frontend Development -->
      <div>
        <h3 class="text-lg font-semibold text-prussianBlue mb-4">
          {{ language === 'en' ? 'Frontend Development' : '프론트엔드 개발' }}
        </h3>
        <div class="space-y-3">
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Vue.js / Nuxt.js</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Expert' : '전문가' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 95%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">JavaScript / TypeScript</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Expert' : '전문가' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">TailwindCSS</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">UI / UX Design</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Intermediate' : '중급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 70%"></div>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Backend Development -->
      <div>
        <h3 class="text-lg font-semibold text-prussianBlue mb-4">
          {{ language === 'en' ? 'Backend Development' : '백엔드 개발' }}
        </h3>
        <div class="space-y-3">
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Node.js</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 80%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Database (MySQL, MongoDB)</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 75%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">REST APIs</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 85%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Game Development -->
      <div>
        <h3 class="text-lg font-semibold text-prussianBlue mb-4">
          {{ language === 'en' ? 'Game Development' : '게임 개발' }}
        </h3>
        <div class="space-y-3">
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Unity</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Expert' : '전문가' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">C#</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Game Design</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Technologies -->
      <div>
        <h3 class="text-lg font-semibold text-prussianBlue mb-4">
          {{ language === 'en' ? 'Tools & Technologies' : '도구 & 기술' }}
        </h3>
        <div class="space-y-3">
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Git / GitHub</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Expert' : '전문가' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">AI Tools & Integration</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Advanced' : '고급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 80%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="flex justify-between items-center mb-1">
              <span class="font-medium">Web3 / Blockchain</span>
              <span class="text-sm text-gray-600">{{ language === 'en' ? 'Beginner' : '초급' }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-celadonBlue h-2 rounded-full" style="width: 40%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Languages -->
    <div class="mt-8">
      <h3 class="text-lg font-semibold text-prussianBlue mb-4">
        {{ language === 'en' ? 'Languages' : '언어' }}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <h4 class="font-semibold text-prussianBlue">
            {{ language === 'en' ? 'French' : '프랑스어' }}
          </h4>
          <p class="text-gray-600">{{ language === 'en' ? 'Native' : '모국어' }}</p>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <h4 class="font-semibold text-prussianBlue">
            {{ language === 'en' ? 'English' : '영어' }}
          </h4>
          <p class="text-gray-600">{{ language === 'en' ? 'Fluent' : '유창함' }}</p>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <h4 class="font-semibold text-prussianBlue">
            {{ language === 'en' ? 'Korean' : '한국어' }}
          </h4>
          <p class="text-gray-600">{{ language === 'en' ? 'Advanced (Sogang Level 6)' : '고급 (서강대 6급)' }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
</script>
