export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/sitemap'
  ],
  i18n: {
    baseUrl: 'maevapasteur.com',
    locales: [
      {
        code: 'fr',
        file: 'fr.json',
        name: 'Français'
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      }
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
      routes: ['/robots.txt', '/sitemap.xml']
    }
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Portfolio 2025',
      meta: [
        { name: 'description', content: 'Portfolio 2025' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/images/favicon/site.webmanifest' }
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
  },
  site: {
    url: 'https://maevapasteur.com'
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ]
  }
})
