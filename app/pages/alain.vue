<template>
  <div class="alain-page text-white antialiased">
    <!-- Fixed background layers (never block scroll) -->
    <div class="pointer-events-none fixed inset-0 -z-10 bg-zinc-950">
      <div class="alain-bg-gradient absolute inset-0" />
      <div class="alain-bg-orbs absolute inset-0 overflow-hidden">
        <div class="alain-orb alain-orb--1" />
        <div class="alain-orb alain-orb--2" />
        <div class="alain-orb alain-orb--3" />
      </div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />

      <!-- Light falling confetti -->
      <div v-if="fallingConfetti.length" class="absolute inset-0 overflow-hidden">
        <span
          v-for="piece in fallingConfetti"
          :key="piece.id"
          class="alain-confetti-fall absolute block rounded-sm"
          :style="{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.6}px`,
            backgroundColor: piece.color,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            '--drift': `${piece.drift}px`
          }"
        />
      </div>
    </div>

    <!-- Opening burst (one-shot) -->
    <div
      v-if="showBurst && burstConfetti.length"
      class="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      <span
        v-for="piece in burstConfetti"
        :key="piece.id"
        class="alain-confetti-burst absolute left-1/2 top-[18%] block rounded-sm"
        :style="{
          width: `${piece.size}px`,
          height: `${piece.size * 1.4}px`,
          backgroundColor: piece.color,
          '--tx': `${piece.tx}px`,
          '--ty': `${piece.ty}px`,
          '--rot': `${piece.rot}deg`,
          animationDelay: `${piece.delay}ms`
        }"
      />
    </div>

    <main class="relative mx-auto w-full max-w-2xl px-4 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-14 md:max-w-3xl md:pt-16">
      <div
        class="alain-title-wrap text-center"
        :class="{ 'alain-title-wrap--ready': titleReady }"
      >
        <p class="alain-title-sparkle alain-title-sparkle--left" aria-hidden="true">✦</p>
        <h1 class="alain-title">
          Joyeux Anniversaire Papa !
        </h1>
        <p class="alain-title-sparkle alain-title-sparkle--right" aria-hidden="true">✦</p>
      </div>

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

      <div class="mx-auto mt-6 w-full max-w-[min(100%,280px)] sm:mt-8 sm:max-w-xs">
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

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' }
  ]
})

useSeoMeta({
  title: 'Joyeux Anniversaire Papa !',
  robots: 'noindex, nofollow'
})

interface FallingPiece {
  id: number
  left: number
  delay: number
  duration: number
  color: string
  size: number
  drift: number
}

interface BurstPiece {
  id: number
  tx: number
  ty: number
  rot: number
  delay: number
  size: number
  color: string
}

const confettiColors = [
  'rgba(251, 191, 36, 0.45)',
  'rgba(244, 114, 182, 0.4)',
  'rgba(129, 140, 248, 0.4)',
  'rgba(52, 211, 153, 0.35)',
  'rgba(251, 146, 60, 0.4)',
  'rgba(255, 255, 255, 0.3)'
]

const fallingConfetti = ref<FallingPiece[]>([])
const burstConfetti = ref<BurstPiece[]>([])
const showBurst = ref(false)
const titleReady = ref(false)

function randomBetween (min: number, max: number) {
  return min + Math.random() * (max - min)
}

function pickColor () {
  return confettiColors[Math.floor(Math.random() * confettiColors.length)]!
}

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  fallingConfetti.value = Array.from({ length: 28 }, (_, id) => ({
    id,
    left: randomBetween(0, 100),
    delay: randomBetween(0, 12),
    duration: randomBetween(14, 22),
    color: pickColor(),
    size: randomBetween(4, 7),
    drift: randomBetween(-40, 40)
  }))

  if (!reducedMotion) {
    burstConfetti.value = Array.from({ length: 36 }, (_, id) => {
      const angle = randomBetween(0, Math.PI * 2)
      const distance = randomBetween(80, 220)
      return {
        id,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        rot: randomBetween(0, 360),
        delay: randomBetween(0, 120),
        size: randomBetween(5, 9),
        color: pickColor().replace(/[\d.]+\)$/, '0.85)')
      }
    })

    showBurst.value = true
    window.setTimeout(() => {
      showBurst.value = false
    }, 2200)

    requestAnimationFrame(() => {
      titleReady.value = true
    })
  } else {
    titleReady.value = true
  }
})
</script>

<style scoped>
.alain-page {
  min-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
}

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

.alain-title-wrap {
  position: relative;
  opacity: 0;
  transform: scale(0.88) translateY(12px);
  transition: none;
}

.alain-title-wrap--ready {
  animation: alain-title-enter 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.alain-title {
  font-family: 'Pacifico', cursive;
  font-size: clamp(2rem, 8vw, 3.25rem);
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow:
    0 0 24px rgba(251, 191, 36, 0.35),
    0 0 48px rgba(244, 114, 182, 0.2),
    0 2px 12px rgba(0, 0, 0, 0.5);
}

.alain-title-sparkle {
  position: absolute;
  top: 50%;
  font-size: 1.1rem;
  color: rgba(251, 191, 36, 0.7);
  opacity: 0;
  transform: translateY(-50%);
}

.alain-title-wrap--ready .alain-title-sparkle--left {
  left: -0.25rem;
  animation: alain-sparkle 1.2s ease 0.5s forwards;
}

.alain-title-wrap--ready .alain-title-sparkle--right {
  right: -0.25rem;
  animation: alain-sparkle 1.2s ease 0.65s forwards;
}

@media (min-width: 640px) {
  .alain-title-sparkle--left { left: 0.5rem; }
  .alain-title-sparkle--right { right: 0.5rem; }
}

.alain-confetti-fall {
  top: -12px;
  opacity: 0;
  animation-name: alain-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.alain-confetti-burst {
  opacity: 0;
  animation: alain-burst 1.6s ease-out forwards;
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

@keyframes alain-title-enter {
  0% {
    opacity: 0;
    transform: scale(0.88) translateY(12px);
  }
  70% {
    opacity: 1;
    transform: scale(1.04) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes alain-sparkle {
  0% { opacity: 0; transform: translateY(-50%) scale(0.5); }
  40% { opacity: 1; transform: translateY(-50%) scale(1.2); }
  100% { opacity: 0.6; transform: translateY(-50%) scale(1); }
}

@keyframes alain-fall {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  8% { opacity: 0.5; }
  92% { opacity: 0.35; }
  100% {
    opacity: 0;
    transform: translate3d(var(--drift), 105vh, 0) rotate(360deg);
  }
}

@keyframes alain-burst {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(var(--rot)) scale(0.6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .alain-bg-gradient,
  .alain-orb,
  .alain-confetti-fall,
  .alain-confetti-burst {
    animation: none;
  }

  .alain-title-wrap {
    opacity: 1;
    transform: none;
  }
}
</style>
