// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  svg: {
    vueSvgLoader: {
    },
    svgSpriteLoader: {
    },
    fileLoader: {
    }
  },
  buildModules: ["@nuxtjs/svg"],
  modules: ['nuxt-simple-robots']
})
