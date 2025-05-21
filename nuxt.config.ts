// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables/root.scss";`
        }
      }
    }
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['nuxt-swiper']
})