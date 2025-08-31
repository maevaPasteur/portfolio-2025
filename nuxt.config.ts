export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],
  i18n: {
    locales: [
      { code: 'fr', file: 'fr.json', name: 'Français' },
      { code: 'en', file: 'en.json', name: 'English' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    compilation: {
      strictMessage: false,
      escapeHtml: false
    }
  },
  css: ['~/assets/css/fonts.css', '~/assets/css/tailwind.css'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Portfolio 2025',
      meta: [
        { name: 'description', content: 'Portfolio 2025' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  ssr: true,
  image: {
    format: ['webp'],
    densities: [1, 2, 3],
    dir: 'public/images'
  },
  icon: {
    mode: 'svg'
  }
})
