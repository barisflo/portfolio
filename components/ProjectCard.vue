<template>
  <div class="w-full max-w-sm mx-auto">
    <div 
      @click="openModal"
      class="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mb-10"
    >
      <!-- Image -->
      <div class="h-60 overflow-hidden">
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="object-cover h-60 w-full"
          loading="lazy"
        />
      </div>

      <!-- Content -->
      <div class="h-48 p-4 text-center flex flex-col">
        <h3 class="font-semibold text-prussianBlue text-xl mb-4">
          {{ project.title }} - {{ project.year }}
        </h3>
        
        <p class="text-base text-gray-600 leading-relaxed mb-4 flex-grow">
          {{ getLocalizedDescription(project) }}
        </p>
        
        <!-- Tags -->
        <div class="flex flex-wrap justify-center gap-2 mt-auto">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="bg-azure px-3 py-1 font-semibold text-sm rounded-full text-celadonBlue"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ProjectModal 
      v-if="isModalOpen"
      :project="project"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

interface Props {
  project: Project
}

const props = defineProps<Props>()

const { getLocalizedDescription } = useProjects()
const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
