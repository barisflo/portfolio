<template>
  <!-- Card Section -->
  <div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-20">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
      <!-- Card -->
      <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="https://linkedin.com/in/florent-baris" target="_blank">
        <div class="p-4 md:p-5">
          <div class="flex">
            <svg class="mt-1 shrink-0 w-8 h-8 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
            </svg>

            <div class="grow ml-5">
              <h3 class="group-hover:text-celadonBlue font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                LinkedIn
              </h3>
              <p v-if="getCookie('lang') === 'eng'" class="text-sm text-gray-500">
                Send me a message
              </p>
              <p v-if="getCookie('lang') === 'kr'" class="text-sm text-gray-500">
                메시지 보내기
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->

      <!-- Card -->
      <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
        <Mailto mail="baris.florent@gmail.com">
          <div class="p-4 md:p-5">
            <div class="flex">
              <svg class="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
              </svg>

              <div class="grow ml-5">
                <h3 class="group-hover:text-celadonBlue font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  Email me
                </h3>
                <p v-if="getCookie('lang') === 'eng'" class="text-sm text-gray-500">
                  Reach me at <span class="text-celadonBlue font-medium dark:text-blue-500">*******@gmail.com</span>
                </p>
                <p v-if="getCookie('lang') === 'kr'" class="text-sm text-gray-500">
                  이메일로 연락하기 <span class="text-celadonBlue font-medium dark:text-blue-500">*******@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </Mailto>
      </a>
      <!-- End Card -->
    </div>

    <!-- End Grid -->
  </div>
  <!-- End Card Section -->
</template>

<script setup>

import Mailto from "@/components/Mailto.vue";
import {getCookie} from "@/cookie";
</script>

<style scoped>

</style>