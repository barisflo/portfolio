<template>
  <header class="border-b-2 border-prussianBlue pb-6 mb-8">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
      <!-- Profile Photo -->
      <div class="flex-shrink-0">
        <NuxtImg
          src="/images/cv.jpeg"
          alt="Florent Baris"
          class="w-32 h-32 rounded-full object-cover border-4 border-celadonBlue"
          loading="eager"
        />
      </div>

      <!-- Header Info -->
      <div class="flex-grow text-center md:text-left">
        <h1 class="text-4xl font-bold text-prussianBlue mb-2">Florent Baris</h1>
        <h2 class="text-2xl text-celadonBlue mb-4">
          {{ language === 'en' ? 'Fullstack Developer' : '풀스택 개발자' }}
        </h2>
        
        <!-- Contact Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
          <div class="flex items-center justify-center md:justify-start gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{{ language === 'en' ? 'Seoul, South Korea' : '대한민국 서울' }}</span>
          </div>
          
          <div class="flex items-center justify-center md:justify-start gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 4 30 25">
              <path d="m3 8v18h26v-18zm4.3125 2h17.375l-8.6875 5.7812zm-2.3125.875 10.4375 6.9688.5625.3437.5625-.3437 10.4375-6.9688v13.125h-22z"/>
            </svg>
            <a href="mailto:baris.florent@gmail.com" class="hover:underline text-celadonBlue">
              baris.florent@gmail.com
            </a>
          </div>
          
          <div class="flex items-center justify-center md:justify-start gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 256 256">
              <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"/>
            </svg>
            <a href="https://linkedin.com/in/florent-baris" target="_blank" rel="noopener noreferrer" class="hover:underline text-celadonBlue">
              linkedin.com/in/florent-baris
            </a>
          </div>
          
          <div class="flex items-center justify-center md:justify-start gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <a href="https://github.com/florentbaris" target="_blank" rel="noopener noreferrer" class="hover:underline text-celadonBlue">
              github.com/florentbaris
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Professional Summary -->
    <div class="mt-6">
      <h3 class="text-lg font-semibold text-prussianBlue mb-3">
        {{ language === 'en' ? 'Professional Summary' : '전문 요약' }}
      </h3>
      <p v-if="language === 'en'" class="text-gray-700 leading-relaxed">
        Passionate fullstack developer with a multidisciplinary profile and strong technical background. 
        Experienced in Digital Transformation and Agile methodologies. Ambitious, resourceful, adaptable, 
        resilient, and creative professional focused on solving real-world problems through innovative 
        technology solutions.
      </p>
      <p v-else class="text-gray-700 leading-relaxed">
        다학제적인 프로필과 강력한 기술적 배경을 가진 열정적인 풀스택 개발자입니다. 
        디지털 변환 및 애자일 방법론에 경험이 있습니다. 혁신적인 기술 솔루션을 통해 
        현실 세계의 문제를 해결하는 데 집중하는 야심차고, 지략적이며, 적응력 있고, 
        회복력 있고, 창의적인 전문가입니다.
      </p>
    </div>
  </header>
</template>

<script setup>
const { language } = useLanguage()
</script>
