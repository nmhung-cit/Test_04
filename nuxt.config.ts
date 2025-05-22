// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],
  ssr: true,
  app: {
    baseURL: '/Test_04/', 
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables/root.scss";`
        }
      }
    }
  },

  devtools: { enabled: true },
  modules: ['nuxt-swiper']
})