<template>
  <section id="projects" class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-20">
      <h2 class="text-3xl font-bold text-center text-prussianBlue mb-12">
        {{ language === 'en' ? 'Featured Projects' : '특징 프로젝트' }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { language } = useLanguage()
const { getProjects } = useProjects()

const projects = getProjects()
</script>
