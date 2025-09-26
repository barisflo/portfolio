// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  css: ['@/assets/css/main.css'],

  app: {
    head: {
      title: 'Florent Baris - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Florent Baris - PM / Developer Portfolio. Experienced game developer specializing in Unity, Vue.js, and modern web technologies. Available for game freelance projects, serious games, mobile games, game design, technical art, and game project management.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Enable SSG for better performance
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
