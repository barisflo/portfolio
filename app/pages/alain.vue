<template>
  <div class="alain-page relative min-h-screen overflow-x-hidden text-white antialiased">
    <!-- Animated dark background -->
    <div class="pointer-events-none fixed inset-0 -z-10 bg-zinc-950">
      <div class="alain-bg-gradient absolute inset-0" />
      <div class="alain-bg-orbs absolute inset-0 overflow-hidden">
        <div class="alain-orb alain-orb--1" />
        <div class="alain-orb alain-orb--2" />
        <div class="alain-orb alain-orb--3" />
      </div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
    </div>

    <main class="relative mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center px-4 py-10 sm:px-6 sm:py-14 md:max-w-3xl md:py-16">
      <h1 class="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Joyeux Anniversaire !
      </h1>

      <!-- Horizontal video -->
      <div class="mt-8 w-full sm:mt-10">
        <div class="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
          <div class="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/6acmqEr4v1o"
              title="Anniversaire"
              class="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>

      <!-- Vertical short -->
      <p class="mt-10 text-center text-xl font-medium tracking-wide text-white/90 sm:mt-12 sm:text-2xl">
        Pour tes copains
      </p>

      <div class="mt-6 w-full max-w-[min(100%,280px)] sm:mt-8 sm:max-w-xs">
        <div class="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
          <div class="relative aspect-[9/16] w-full">
            <iframe
              src="https://www.youtube.com/embed/d2z4BNn294Y"
              title="Pour tes copains"
              class="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useSeoMeta({
  title: 'Joyeux Anniversaire !',
  robots: 'noindex, nofollow'
})
</script>

<style scoped>
.alain-bg-gradient {
  background: linear-gradient(
    135deg,
    #09090b 0%,
    #18181b 25%,
    #0c0a14 50%,
    #18181b 75%,
    #09090b 100%
  );
  background-size: 400% 400%;
  animation: alain-gradient-shift 18s ease infinite;
}

.alain-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.alain-orb--1 {
  width: 60vw;
  height: 60vw;
  max-width: 420px;
  max-height: 420px;
  top: -10%;
  left: -15%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
  animation: alain-float-1 22s ease-in-out infinite;
}

.alain-orb--2 {
  width: 50vw;
  height: 50vw;
  max-width: 360px;
  max-height: 360px;
  bottom: 20%;
  right: -20%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
  animation: alain-float-2 26s ease-in-out infinite;
}

.alain-orb--3 {
  width: 40vw;
  height: 40vw;
  max-width: 280px;
  max-height: 280px;
  bottom: -5%;
  left: 30%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  animation: alain-float-3 20s ease-in-out infinite;
}

@keyframes alain-gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes alain-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(8%, 12%) scale(1.05); }
  66% { transform: translate(-5%, 5%) scale(0.95); }
}

@keyframes alain-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-10%, -8%) scale(1.08); }
}

@keyframes alain-float-3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(6%, -10%); }
}

@media (prefers-reduced-motion: reduce) {
  .alain-bg-gradient,
  .alain-orb {
    animation: none;
  }
}
</style>
