<template>
  <div class="min-h-screen flex items-center justify-center bg-cultured">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-prussianBlue mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ error.statusMessage }}</p>
      <NuxtLink to="/" class="btn btn-primary">
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

defineProps<Props>()
</script>
