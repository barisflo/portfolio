<template>
  <div class="min-h-screen bg-cultured">
    <AppNavigation />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
// Initialize language on app start
const { initializeLanguage } = useLanguage()
onMounted(() => {
  initializeLanguage()
})
</script>
