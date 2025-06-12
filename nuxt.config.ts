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