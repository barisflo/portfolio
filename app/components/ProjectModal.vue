<template>
  <Teleport to="body">
    <div 
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl"
        @click.stop
      >
        <!-- Header with gradient background -->
        <div class="bg-gradient-to-r from-prussianBlue to-celadonBlue text-white p-6">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h2 class="text-3xl font-bold">{{ project.title }}</h2>
                <span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  {{ project.year }}
                </span>
              </div>
              <p class="text-lg opacity-90 mb-3">
                {{ getLocalizedDescription(project, false) }}
              </p>
              <div class="flex items-center gap-2">
                <span class="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {{ project.category }}
                </span>
              </div>
            </div>
            <button 
              @click="closeModal"
              class="text-white hover:text-gray-200 text-2xl p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all duration-200"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Content with side-by-side layout -->
        <div class="flex flex-col lg:flex-row max-h-[calc(90vh-200px)] overflow-hidden">
          <!-- Left side - Image -->
          <div class="lg:w-1/2 p-6">
            <div class="relative">
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <!-- Right side - Details -->
          <div class="lg:w-1/2 p-6 space-y-6 overflow-y-auto">
            <!-- Detailed Description -->
            <div>
              <h3 class="text-lg font-bold text-prussianBlue mb-2 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ language === 'en' ? 'Project Details' : '프로젝트 세부사항' }}
              </h3>
              <p class="text-gray-700 leading-relaxed text-sm">
                {{ getLocalizedDescription(project, true) }}
              </p>
            </div>

            <!-- Technologies -->
            <div>
              <h3 class="text-lg font-bold text-prussianBlue mb-2 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {{ language === 'en' ? 'Technologies & Skills' : '기술 및 스킬' }}
              </h3>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="bg-gray-100 text-gray-800 px-2 py-1 font-medium text-xs rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Project Links -->
            <div>
              <h3 class="text-lg font-bold text-prussianBlue mb-2 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ language === 'en' ? 'Project Links' : '프로젝트 링크' }}
              </h3>
              <div class="space-y-2">
                <a 
                  :href="project.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-prussianBlue text-white px-3 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {{ language === 'en' ? 'View Project' : '프로젝트 보기' }}
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="bg-gray-50 rounded-lg p-3">
              <h4 class="text-sm font-semibold text-prussianBlue mb-2">
                {{ language === 'en' ? 'Project Information' : '프로젝트 정보' }}
              </h4>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span class="font-semibold text-gray-600">{{ language === 'en' ? 'Category:' : '카테고리:' }}</span>
                  <p class="text-gray-800">{{ project.category }}</p>
                </div>
                <div>
                  <span class="font-semibold text-gray-600">{{ language === 'en' ? 'Year:' : '연도:' }}</span>
                  <p class="text-gray-800">{{ project.year }}</p>
                </div>
                <div class="col-span-2">
                  <span class="font-semibold text-gray-600">{{ language === 'en' ? 'Technologies:' : '기술:' }}</span>
                  <p class="text-gray-800">{{ project.tags.join(', ') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

interface Props {
  project: Project
}

interface Emits {
  close: []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { language } = useLanguage()
const { getLocalizedDescription } = useProjects()

const closeModal = () => {
  emit('close')
}

// Close modal on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>
