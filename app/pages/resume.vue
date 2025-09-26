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
          <button @click="printResume" class="btn btn-primary flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>{{ language === 'en' ? 'Print Resume' : '이력서 출력' }}
          </button>
          <!-- Download PDF button commented out - same functionality as Print Resume for now -->
          <!-- <button @click="generatePDF" class="btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>{{ language === 'en' ? 'Download PDF' : 'PDF 다운로드' }}
          </button> -->
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

<script setup lang="ts">
const { language } = useLanguage()

// Import PDF libraries (client-side only)
let html2canvas: any = null;
let jsPDF: any = null;

onMounted(async () => {
  if (import.meta.client) {
    const html2canvasModule = await import('html2canvas')
    const jsPDFModule = await import('jspdf')
    html2canvas = html2canvasModule.default
    jsPDF = jsPDFModule.jsPDF
  }
})

// SEO and meta tags
useSeoMeta({
  title: 'Florent Baris - Resume',
  description: 'Professional resume of Florent Baris, PM and Developer with expertise in Vue.js, Nuxt, Unity, and modern web technologies.',
  keywords: 'Florent Baris, Resume, CV, PM, Developer, Project Manager, Vue.js, Nuxt, Unity',
  author: 'Florent Baris',
  ogTitle: 'Florent Baris - Resume',
  ogDescription: 'Professional resume of Florent Baris, PM and Developer.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

const printResume = () => {
  // Set default filename for PDF export
  const originalTitle = document.title
  document.title = 'Florent_Baris_Resume'
  
  // For printing, we'll use the browser's print dialog with our optimized print styles
  // This gives users control over print settings while removing artifacts
  const beforePrint = () => {
    // Hide any remaining UI elements
    const noprint = document.querySelectorAll('.no-print')
    noprint.forEach(el => (el as HTMLElement).style.display = 'none')
  }
  
  const afterPrint = () => {
    // Restore UI elements
    const noprint = document.querySelectorAll('.no-print')
    noprint.forEach(el => (el as HTMLElement).style.display = '')
    
    // Restore original title
    document.title = originalTitle
  }
  
  window.addEventListener('beforeprint', beforePrint)
  window.addEventListener('afterprint', afterPrint)
  
  window.print()
  
  // Clean up event listeners
  setTimeout(() => {
    window.removeEventListener('beforeprint', beforePrint)
    window.removeEventListener('afterprint', afterPrint)
  }, 1000)
}

const generatePDF = () => {
  // Use the same print process as Print Resume
  printResume()
}
</script>

<style>
@media print {
  /* Remove browser headers/footers and margins */
  @page {
    margin: 0.5in;
    size: A4;
    /* Hide browser artifacts */
    @top-left { content: ""; }
    @top-center { content: ""; }
    @top-right { content: ""; }
    @bottom-left { content: ""; }
    @bottom-center { content: ""; }
    @bottom-right { content: ""; }
  }
  
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
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  #resume-content {
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
  }
  
  /* Fix header layout for PDF */
  .flex.flex-col.md\:flex-row {
    flex-direction: row !important;
    align-items: flex-start !important;
  }
  
  .text-center.md\:text-left {
    text-align: left !important;
  }
  
  .justify-center.md\:justify-start {
    justify-content: flex-start !important;
  }
  
  /* Ensure profile photo stays in position */
  .flex-shrink-0 {
    flex-shrink: 0 !important;
    margin-right: 1.5rem !important;
  }
  
  /* Experience date alignment fixes for print */
  .md\:justify-between {
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
  }
  
  /* Contact info grid - keep 2 columns but reduce gaps */
  .grid.grid-cols-1.md\:grid-cols-2.gap-2 {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 4px 16px !important;
    align-items: start !important;
  }
  
  /* Skills grid layout - maintain columns in print */
  .grid.grid-cols-1.md\:grid-cols-2:not(.gap-2) {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 2rem !important;
  }
  
  .grid.grid-cols-1.md\:grid-cols-3 {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr !important;
    gap: 1rem !important;
  }
  
  /* Compact spacing for print */
  .mb-8 {
    margin-bottom: 1rem !important;
  }
  
  .mb-6 {
    margin-bottom: 0.75rem !important;
  }
  
  .space-y-6 > * + * {
    margin-top: 1rem !important;
  }
  
  /* Reduce margins for experience items and optimize page breaks */
  .border-l-4 {
    margin-bottom: 0.75rem !important;
    page-break-inside: auto;
    break-inside: auto;
  }
  
  /* Increase gap between Education and Skills sections in print */
  .education-section {
    margin-bottom: 2rem !important;
  }
  
  /* Add top margin to Skills section in print */
  .skills-section {
    margin-top: 1.5rem !important;
  }
  
  /* Add top margin to Projects section in print */
  .projects-section {
    margin-top: 1rem !important;
  }
  
  /* Reduce spacing within experience items */
  .border-l-4 ul {
    margin-top: 0.5rem !important;
  }
  
  .border-l-4 li {
    margin-bottom: 0.25rem !important;
  }
  
  /* Ensure proper margins for printing */
  .max-w-4xl {
    max-width: none !important;
    margin: 0 !important;
    padding: 1rem !important;
  }
  
  /* Make links appear as normal text but keep them functional */
  a {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  /* Ensure colors print correctly */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  /* Scale down content to fit more on page */
  body {
    transform: scale(0.85) !important;
    transform-origin: top left !important;
    width: 117.6% !important; /* Compensate for scale */
    margin: 0 !important;
    overflow: hidden !important;
  }
  
  /* Prevent extra pages */
  html, body {
    height: auto !important;
    max-height: none !important;
  }
  
  /* Ensure content doesn't create extra pages */
  .max-w-4xl {
    overflow: hidden !important;
    page-break-after: avoid !important;
  }
  
  /* Compact experience layout - single line */
  .experience-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    margin-bottom: 0.5rem !important;
  }
  
  .experience-title-company {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    font-size: 0.9rem !important;
  }
  
  .experience-date {
    font-size: 0.8rem !important;
    white-space: nowrap !important;
  }
  
  /* Hide projects section or make it very compact */
  .projects-section {
    display: none !important;
  }
  
  /* Alternative: Show projects as simple bullet list */
  .projects-compact {
    display: block !important;
  }
  
  /* Hide education section and show compact version */
  .education-section {
    display: none !important;
  }
  
  .education-compact {
    display: block !important;
  }
  
  .projects-compact ul, .education-compact ul {
    margin: 0 !important;
    padding-left: 1.5rem !important;
  }
  
  .projects-compact li, .education-compact li {
    margin-bottom: 0.25rem !important;
    font-size: 0.9rem !important;
    line-height: 1.3 !important;
  }
  
  /* Compact skills section */
  .skills-section h3 {
    font-size: 1rem !important;
    margin-bottom: 0.75rem !important;
  }
  
  .skills-section .skill-item {
    margin-bottom: 0.5rem !important;
  }
  
  .skills-section .skill-item .flex {
    margin-bottom: 0.25rem !important;
  }
  
  .skills-section .font-medium {
    font-size: 0.85rem !important;
  }
  
  .skills-section .text-sm {
    font-size: 0.75rem !important;
  }
  
  /* Smaller progress bars */
  .skills-section .h-2 {
    height: 0.375rem !important;
  }
  
  /* Compact grid layout for skills */
  .skills-section .grid {
    gap: 1rem !important;
  }
  
  .skills-section .space-y-3 > * + * {
    margin-top: 0.5rem !important;
  }
  
  /* Languages section compact */
  .skills-section .space-y-2 > * + * {
    margin-top: 0.25rem !important;
  }
  
  /* Reduce gap between skill grid rows and languages section */
  .skills-section .grid {
    margin-bottom: 1rem !important;
  }
  
  /* Reduce gap between grid and languages section */
  .skills-section > div:last-child {
    margin-top: 1rem !important;
  }
  
  /* Prevent last sections from creating extra pages */
  .projects-compact, .education-compact {
    page-break-after: avoid !important;
    margin-bottom: 0 !important;
  }
  
  /* Remove bottom margins from last elements */
  section:last-child {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
}
</style>
