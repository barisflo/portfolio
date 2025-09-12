<template>
  <div class="min-h-screen bg-white">
    <!-- Push content down to avoid navigation overlap -->
    <div class="pt-20"></div>
    
    <div class="max-w-4xl mx-auto p-8">
      <!-- Header with Print/Download controls -->
      <div class="flex justify-between items-center mb-8 no-print">
        <NuxtLink to="/" class="text-celadonBlue hover:text-prussianBlue transition-colors">
          ← Back to Portfolio
        </NuxtLink>
        <div class="flex gap-4">
          <button @click="printResume" class="btn btn-primary">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            {{ language === 'en' ? 'Print Resume' : '이력서 출력' }}
          </button>
          <button @click="generatePDF" class="btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            {{ language === 'en' ? 'Download PDF' : 'PDF 다운로드' }}
          </button>
        </div>
      </div>

      <!-- Resume Content -->
      <div id="resume-content" class="bg-white">
        <ResumeHeader />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeSkills />
        <ResumeProjects />
      </div>
    </div>
  </div>
</template>

<script setup>
const { language } = useLanguage()

// SEO and meta tags
useSeoMeta({
  title: 'Florent Baris - Resume',
  description: 'Professional resume of Florent Baris, Fullstack Developer with expertise in Vue.js, Nuxt, Unity, and modern web technologies.',
  keywords: 'Florent Baris, Resume, CV, Fullstack Developer, Vue.js, Nuxt, Unity',
  author: 'Florent Baris',
  ogTitle: 'Florent Baris - Resume',
  ogDescription: 'Professional resume of Florent Baris, Fullstack Developer.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

const printResume = () => {
  window.print()
}

const generatePDF = async () => {
  // This will be implemented with a PDF generation library
  // For now, we'll use the browser's print to PDF functionality
  window.print()
}
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
  
  /* Hide navigation completely in print */
  nav {
    display: none !important;
  }
  
  /* Remove top padding when printing */
  .pt-20 {
    padding-top: 0 !important;
  }
  
  body {
    background: white !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  #resume-content {
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
  }
  
  /* Optimize page breaks */
  .border-l-4 {
    page-break-inside: avoid;
  }
  
  /* Ensure proper margins for printing */
  .max-w-4xl {
    max-width: none !important;
    margin: 0 !important;
    padding: 1rem !important;
  }
}
</style>
