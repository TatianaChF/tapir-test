// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet'
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/mixins.scss" as *;`
        }
      }
    }
  }
})
