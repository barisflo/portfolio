<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-6">
          <NuxtLink to="#about" class="text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'About' : '소개' }}
          </NuxtLink>
          <NuxtLink to="#projects" class="text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'Projects' : '프로젝트' }}
          </NuxtLink>
          <NuxtLink to="#contact" class="text-prussianBlue hover:text-celadonBlue transition-colors">
            {{ language === 'en' ? 'Contact' : '연락처' }}
          </NuxtLink>
        </div>
        
        <div class="flex items-center space-x-2">
          <button 
            @click="toggleLanguage"
            class="flex items-center space-x-1 px-3 py-1 rounded-md bg-azure hover:bg-powderBlue transition-colors"
          >
            <span class="text-sm font-medium">{{ language.toUpperCase() }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { language, setLanguage } = useLanguage()

const toggleLanguage = () => {
  setLanguage(language.value === 'en' ? 'kr' : 'en')
}
</script>
