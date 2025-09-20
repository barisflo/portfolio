<template>
  <div class="w-full max-w-4xl mx-auto">
    <div 
      @click="openModal"
      class="cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.005]"
    >
      <div class="flex flex-col md:flex-row">
        <!-- Content - Left side (takes more space) -->
        <div class="flex-1 p-3 pt-2 md:p-4 md:pt-2">
          <div class="flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-start justify-between mb-1">
              <h3 class="font-bold text-prussianBlue text-lg">
                {{ project.title }}
              </h3>
              <div class="flex items-center gap-1.5 flex-shrink-0 ml-3">
                <span class="bg-azure text-celadonBlue px-2 py-0.5 font-semibold text-xs rounded-full">
                  {{ project.year }}
                </span>
                <span class="bg-gray-100 text-gray-700 px-2 py-0.5 font-medium text-xs rounded-full">
                  {{ project.category }}
                </span>
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-700 leading-relaxed text-sm mb-3 flex-grow line-clamp-2">
              {{ getLocalizedDescription(project) }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-1 mb-2">
              <span 
                v-for="tag in project.tags.slice(0, 3)" 
                :key="tag"
                class="bg-gray-100 text-gray-700 px-2 py-0.5 font-medium text-xs rounded-full border border-gray-200"
              >
                {{ tag }}
              </span>
              <span v-if="project.tags.length > 3" class="text-gray-500 text-xs px-2 py-0.5">
                +{{ project.tags.length - 3 }}
              </span>
            </div>

            <!-- View Details Button -->
            <div class="flex items-center text-prussianBlue font-medium text-xs group">
              <span>{{ language === 'en' ? 'View Details' : '세부사항 보기' }}</span>
              <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Image - Right side (smaller) -->
        <div class="w-full md:w-24 lg:w-28 h-24 md:h-auto flex-shrink-0">
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="object-cover w-full h-full"
            loading="lazy"
          />
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

const { language } = useLanguage()
const { getLocalizedDescription } = useProjects()
const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
