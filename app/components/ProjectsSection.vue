<template>
  <section id="projects" class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-20">
      <h2 class="text-3xl font-bold text-center text-prussianBlue mb-12">
        {{ language === 'en' ? 'Featured Projects' : '특징 프로젝트' }}
      </h2>
      
      <div class="space-y-12">
        <div v-for="category in groupedProjects" :key="category.name" class="space-y-6">
          <div class="max-w-4xl mx-auto">
            <h3 class="text-2xl font-semibold text-prussianBlue border-b-2 border-azure pb-2">
              {{ category.name }}
            </h3>
          </div>
          
          <div class="space-y-3">
            <ProjectCard 
              v-for="project in category.projects" 
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </div>

      <!-- View Resume Button -->
      <div class="flex justify-center mt-12">
        <NuxtLink to="/resume">
          <button class="btn btn-primary flex items-center gap-2">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 42 42">
              <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416zM32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916zM32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
            </svg>
            <span class="hidden sm:inline">{{ language === 'en' ? 'View Resume' : '이력서 보기' }}</span>
            <span class="sm:hidden">{{ language === 'en' ? 'Resume' : '이력서' }}</span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
const { getProjects } = useProjects()

const projects = getProjects()

const groupedProjects = computed(() => {
  const groups = {}
  
  projects.forEach(project => {
    if (!groups[project.category]) {
      groups[project.category] = {
        name: project.category,
        projects: []
      }
    }
    groups[project.category].projects.push(project)
  })
  
  return Object.values(groups)
})
</script>
