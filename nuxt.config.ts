export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/tailwind.css', '~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  app: {
    baseURL: '/portfolio-2025/',
    head: {
      title: 'Portfolio 2025',
      meta: [
        { name: 'description', content: 'Portfolio 2025' }
      ]
    }
  }
})
