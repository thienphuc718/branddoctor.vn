import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Brand Doctor Group',
  },
  buildModules: ['@vueuse/nuxt', '@pinia/nuxt', '@unocss/nuxt'],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: false, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  vite: {
    logLevel: 'info',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "./assets/scss/_variables.scss";@import "./assets/scss/_breakpoints.scss";',
        },
      },
    },
  },
})
