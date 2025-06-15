// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],

  // Configure Google Fonts
  fonts: {
    google: {
      families: {
        Merriweather: [300, 400, 700],
        Varta: [300, 400, 500, 600, 700], 
        Karla: [300, 400, 500, 600, 700]
      }
    }
  },

  css: [
  '~/assets/scss/main.scss'
],
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/assets/scss/variables" as *; @use "~/assets/scss/mixins" as *;'
      }
    }
  }
}
})