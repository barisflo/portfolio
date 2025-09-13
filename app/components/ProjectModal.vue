<template>
  <Teleport to="body">
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <h2 class="text-2xl font-bold text-prussianBlue">
            {{ project.title }} - {{ project.year }}
          </h2>
          <button 
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <!-- Content -->
        <div class="p-6">
          <!-- Image -->
          <div class="mb-6">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <!-- Description -->
          <div class="mb-6">
            <p class="text-gray-700 leading-relaxed">
              {{ getLocalizedDescription(project, true) }}
            </p>
          </div>

          <!-- Tags -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-prussianBlue mb-3">
              {{ language === 'en' ? 'Technologies' : '기술' }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="bg-azure px-3 py-1 font-semibold text-sm rounded-full text-celadonBlue"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Link -->
          <div class="flex justify-center">
            <a 
              :href="project.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-primary inline-flex items-center gap-2"
            >
              {{ language === 'en' ? 'View Project' : '프로젝트 보기' }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
  if (process.client) {
    document.addEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>
