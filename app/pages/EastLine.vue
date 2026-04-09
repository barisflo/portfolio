<template>
  <div class="min-h-screen bg-black text-zinc-100 antialiased selection:bg-white/20">
    <header class="border-b border-white/10">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-6 md:px-8">
        <div class="flex min-w-0 flex-1 items-center gap-4">
          <img
            src="/EastLine/EastLineNW.png"
            alt="EastLine"
            class="h-10 w-auto max-h-14 max-w-[min(100%,28rem)] shrink-0 object-contain object-left md:h-12"
            width="400"
            height="96"
            decoding="async"
          />
          <span class="font-semibold tracking-tight text-white">EastLine</span>
        </div>
        <button
          type="button"
          class="shrink-0 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
          :aria-label="lang === 'en' ? 'Switch to Korean' : 'Switch to English'"
          @click="toggleLang"
        >
          {{ lang === 'en' ? '한국어' : 'English' }}
        </button>
      </div>
    </header>

    <main>
      <section class="relative overflow-hidden border-b border-white/10">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]" />
        <div class="relative mx-auto max-w-2xl px-5 py-12 text-center md:px-8 md:py-16">
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {{ t.introEyebrow }}
          </p>
          <h1 class="mt-4 text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl">
            {{ t.introHeadline }}
          </h1>
          <p class="mx-auto mt-6 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
            {{ t.introBody }}
          </p>
          <div class="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
      </section>

      <section class="py-12 md:py-20">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
          <div class="flex flex-col items-center gap-16 md:gap-24">
            <template v-for="(slide, i) in slides" :key="slide.src">
              <article class="w-full max-w-[min(100%,56rem)]">
                <p class="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600">
                  {{ String(i + 1).padStart(2, '0') }}
                </p>
                <div
                  class="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)] ring-1 ring-white/5"
                >
                  <img
                    :src="slide.src"
                    :alt="slideAlt(i)"
                    class="mx-auto block h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>

              <div
                v-if="i === 4"
                class="w-full max-w-[min(100%,76rem)]"
              >
                <p class="mb-3 text-center text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {{ t.liveSample }}
                </p>
                <p class="mb-5 text-center text-sm text-zinc-500">
                  {{ t.liveHint }}
                </p>
                <div
                  class="overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                >
                  <iframe
                    :src="reportEmbedUrl"
                    :title="t.iframeTitle"
                    class="aspect-[16/10] w-full min-h-[520px] border-0 md:min-h-[680px] lg:min-h-[720px]"
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allow="fullscreen"
                  />
                </div>
              </div>

              <div
                v-else-if="bridgeText(i)"
                class="flex w-full max-w-sm flex-col items-center gap-5"
              >
                <div class="h-px w-16 bg-gradient-to-r from-transparent via-white/25 to-transparent md:w-24" />
                <p class="text-center text-sm leading-relaxed text-zinc-500">
                  {{ bridgeText(i) }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </section>

      <section class="relative border-t border-white/10 py-16 md:py-24">
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(255,255,255,0.04),transparent)]" />
        <div class="relative mx-auto max-w-2xl px-5 md:max-w-3xl md:px-8">
          <div
            class="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-8 shadow-[0_32px_120px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 md:p-12 md:text-center"
          >
            <p class="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              {{ t.thankYou }}
            </p>
            <h2 class="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {{ t.ctaTitle }}
            </h2>
            <p class="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
              {{ t.ctaBody }}
            </p>
            <div class="mt-10 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md sm:items-center">
              <a
                :href="mailtoIntroHref"
                class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                {{ t.getInTouch }}
              </a>
              <a
                href="mailto:baris.florent@gmail.com"
                class="text-center text-sm text-zinc-500 transition hover:text-zinc-300"
              >
                baris.florent@gmail.com
              </a>
            </div>
          </div>

          <p class="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-zinc-600">
            {{ t.ctaNote }}
          </p>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/10 py-10">
      <div class="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 text-center md:px-8">
        <div class="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p class="text-xs text-zinc-600">
          © {{ year }} EastLine · Seoul
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

type Lang = 'en' | 'ko'

const year = new Date().getFullYear()

const lang = ref<Lang>('en')

const copy = {
  en: {
    introEyebrow: 'Co-publishing intelligence · Seoul',
    introHeadline:
      'Korean indie games → global publishers. Clear evaluation, selective intros.',
    introBody:
      'EastLine helps Korean indie studios meet the right overseas publishers — and helps those publishers see which projects deserve a real conversation. Structured briefs, AI-assisted research, human judgment; Ready, Watch, or Pass.',
    liveSample: 'Live sample',
    liveHint: 'Scroll inside the frame — same analysis pipeline, on a real title.',
    iframeTitle: 'EastLine — sample DeepSearch report',
    bridge0: 'Founder-led work — AI speeds analysis; calls stay human.',
    bridge2: 'From first read to introduction — small slates, clear reasoning.',
    thankYou: 'Thank you',
    ctaTitle: 'Glad you made it this far',
    ctaBody:
      'Whether you’re scouting from a publisher seat or shipping from a studio in Korea — if this resonated, I’d like to hear from you. Tell me what you’re building or what you’re looking for; we’ll see if EastLine is the right bridge.',
    getInTouch: 'Get in touch',
    ctaNote:
      'EastLine is independent advisory — not a publisher, not a fund. Replies are personal; there’s no newsletter or list to join.',
    slideAlt: (n: number) => `EastLine pitch slide ${n}`,
    mailSubject: 'EastLine — intro',
    seoTitle: 'EastLine — Korea–global co-publishing intelligence',
    seoDescription:
      'Founder-led co-publishing intelligence and matchmaking: Korean indie studios, global publishers, AI-assisted evaluation and selective introductions.'
  },
  ko: {
    introEyebrow: '공동 출판 인텔리전스 · 서울',
    introHeadline:
      '한국 인디 게임 → 글로벌 퍼블리셔. 명확한 평가, 선별적인 연결.',
    introBody:
      'EastLine은 한국 인디 스튜디오가 맞는 해외 퍼블리셔를 만나도록 돕고, 퍼블리셔가 진지한 대화가 필요한 프로젝트를 가려보도록 돕습니다. 구조화된 브리프, AI 보조 리서치, 사람의 판단; Ready, Watch, Pass.',
    liveSample: '라이브 샘플',
    liveHint:
      '프레임 안에서 스크롤해 보세요. 실제 타이틀에 적용된 동일한 분석 파이프라인입니다.',
    iframeTitle: 'EastLine — DeepSearch 리포트 샘플',
    bridge0: '창업자 중심 — AI는 분석을 빠르게, 판단은 사람이 합니다.',
    bridge2: '첫 검토에서 소개까지 — 소수 묶음, 명확한 근거.',
    thankYou: '감사합니다',
    ctaTitle: '여기까지 읽어 주셔서 감사합니다',
    ctaBody:
      '퍼블리셔로 보고 계신 분이든, 한국 스튜디오에서 만드시는 분이든 — 공감되셨다면 연락 주세요. 무엇을 만들고 계신지, 무엇을 찾고 계신지 알려 주시면 EastLine이 맞는 다리인지 함께 보겠습니다.',
    getInTouch: '문의하기',
    ctaNote:
      'EastLine은 독립 자문입니다. 퍼블리셔나 펀드가 아니며, 답장은 직접 드립니다. 뉴스레터나 가입 리스트는 없습니다.',
    slideAlt: (n: number) => `EastLine 피치 슬라이드 ${n}`,
    mailSubject: 'EastLine — 문의',
    seoTitle: 'EastLine — 한국·글로벌 공동 출판 인텔리전스',
    seoDescription:
      '창업자 중심 공동 출판 인텔리전스 및 매칭: 한국 인디 스튜디오와 글로벌 퍼블리셔, AI 보조 평가와 선별적 연결.'
  }
} as const

const t = computed(() => copy[lang.value])

function toggleLang () {
  lang.value = lang.value === 'en' ? 'ko' : 'en'
}

function bridgeText (i: number): string | undefined {
  if (i === 0) return t.value.bridge0
  if (i === 2) return t.value.bridge2
  return undefined
}

function slideAlt (i: number) {
  return t.value.slideAlt(i + 1)
}

const mailtoIntroHref = computed(() => {
  const subject = encodeURIComponent(t.value.mailSubject)
  return `mailto:baris.florent@gmail.com?subject=${subject}`
})

const reportEmbedUrl =
  'https://deep-search-report.vercel.app/report/report08?runId=report08-reverie_20260331_01&s=eastline'

const pitchBase = '/EastLine/pitch/'
const slideFiles = [
  'EastLine PitchDeck 1.png',
  'EastLine PitchDeck (2).png',
  'EastLine PitchDeck (3).png',
  'EastLine PitchDeck (4).png',
  'EastLine PitchDeck (5).png',
  'EastLine PitchDeck (6).png'
]

const slides = slideFiles.map((name) => ({
  src: `${pitchBase}${encodeURIComponent(name)}`
}))

useHead(() => ({
  htmlAttrs: {
    lang: lang.value === 'ko' ? 'ko' : 'en'
  }
}))

const seoTitle = computed(() => copy[lang.value].seoTitle)
const seoDescription = computed(() => copy[lang.value].seoDescription)

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: 'EastLine',
  ogDescription: seoDescription,
  twitterCard: 'summary_large_image'
})
</script>
