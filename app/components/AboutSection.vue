<template>
  <section id="about" class="min-h-screen flex items-center py-20">
    <div class="container mx-auto px-4 md:px-20">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Profile Image -->
        <div class="md:w-1/2 w-full">
          <NuxtImg
            src="/images/cv.jpeg"
            alt="Picture of Florent Baris"
            class="rounded-full mx-auto h-52 w-52 md:h-80 md:w-80 object-cover shadow-lg"
            loading="eager"
          />
        </div>

        <!-- Content -->
        <div class="md:w-1/2 w-full flex flex-col">
          <div class="flex-grow">
            <h1 class="text-4xl font-bold text-prussianBlue mb-2">Florent Baris</h1>
            <h2 class="text-2xl text-celadonBlue mb-4">
              {{ language === 'en' ? 'Developer and Project Manager' : '개발자 및 프로젝트 매니저' }}
            </h2>
            
            <!-- Professional Summary -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-prussianBlue mb-3">
                {{ language === 'en' ? 'Professional Summary' : '전문 요약' }}
              </h3>
              <p v-if="language === 'en'" class="text-gray-700 leading-relaxed">
                Experience as a PM and frontend developer + game developer. My multidisciplinary profile and strong technical background, as well as
                in Digital Transformation and Agile methodologies makes me able to work horizontally and adapts to both my team and client needs.
              </p>
              <p v-else class="text-gray-700 leading-relaxed">
                PM 및 프론트엔드 개발자 + 게임 개발자로서의 경험. 다학제적인 프로필과 강력한 기술적 배경, 
                그리고 디지털 변환 및 애자일 방법론에 대한 경험으로 수평적으로 작업하며 팀과 클라이언트 요구에 모두 적응할 수 있습니다.
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-2 mt-4">
            <NuxtLink to="/resume">
              <button class="btn btn-primary flex items-center gap-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 42 42">
                  <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416zM32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916zM32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
                </svg>
                <span class="hidden sm:inline">{{ language === 'en' ? 'View Resume' : '이력서 보기' }}</span>
                <span class="sm:hidden">{{ language === 'en' ? 'Resume' : '이력서' }}</span>
              </button>
            </NuxtLink>


            <a href="https://linkedin.com/in/florent-baris" target="_blank" rel="noreferrer">
              <button class="btn btn-primary flex items-center gap-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 256 256">
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"/>
                </svg>
                <span class="hidden xl:inline">LinkedIn</span>
              </button>
            </a>

            <a href="mailto:baris.florent@gmail.com">
              <button class="btn btn-primary flex items-center gap-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 4 30 25">
                  <path d="m3 8v18h26v-18zm4.3125 2h17.375l-8.6875 5.7812zm-2.3125.875 10.4375 6.9688.5625.3437.5625-.3437 10.4375-6.9688v13.125h-22z"/>
                </svg>
                <span class="hidden xl:inline">{{ language === 'en' ? 'Mail' : '메일' }}</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- Essential Information - Below buttons -->
      <div class="mt-8 flex justify-center">
        <div class="bg-gray-50 p-6 rounded-xl max-w-4xl w-full">
          <div class="space-y-4 text-center">
            <!-- Technical experience tags -->
            <div class="flex flex-wrap justify-center gap-2">
              <template v-if="language === 'en'">
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">2 years Project Manager (3+ projects)</span>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">4+ years Dev JS</span>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">4+ years C# Unity</span>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">15 Game projects</span>
              </template>
              <template v-else>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">2년 프로젝트 매니저 (3+ 프로젝트)</span>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">4+년 Dev JS</span>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">4+년 C# Unity</span>
                <span class="bg-azure text-celadonBlue px-3 py-1 font-semibold text-sm rounded-full">15개 게임 프로젝트</span>
              </template>
            </div>
            
            <!-- Languages tags -->
            <div class="flex flex-wrap justify-center gap-2">
              <template v-if="language === 'en'">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 font-medium text-sm rounded-full border border-gray-200">French (native)</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 font-medium text-sm rounded-full border border-gray-200">English (fluent)</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 font-medium text-sm rounded-full border border-gray-200">Korean (Sogang Level 6)</span>
              </template>
              <template v-else>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 font-medium text-sm rounded-full border border-gray-200">프랑스어 (모국어)</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 font-medium text-sm rounded-full border border-gray-200">영어 (유창함)</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 font-medium text-sm rounded-full border border-gray-200">한국어 (서강대 6급)</span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
</script>
