// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  css: ['@/assets/css/main.css'],
  components : [{ path: '@/components', pathPrefix: false }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules:["nuxt-swiper", '@nuxt/image', 'nuxt-quasar-ui']
})
