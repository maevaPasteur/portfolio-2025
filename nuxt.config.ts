import { resolve } from 'pathe'
import { ipxRoutes } from './utils/ipx-routes'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.maevapasteur.com'
    }
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    'nuxt-schema-org'
  ],
  i18n: {
    lazy: true,
    langDir: '../locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    defaultLocale: 'fr',
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
    preset: 'github-pages',
    prerender: {
      routes: ['/robots.txt', '/sitemap.xml', ...ipxRoutes]
    }
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Maëva Pasteur - Front end developer',
      meta: [
        { name: 'description', content: 'Portfolio 2025' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/images/favicon/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/favicon/favicon-16x16.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/images/favicon/apple-touch-icon.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  ssr: true,
  image: {
    provider: 'ipx',
    format: ['webp'],
    densities: [1, 2],
    dir: 'public/images'
  },
  icon: {
    mode: 'svg'
  },
  site: {
    url: 'https://www.maevapasteur.com'
  },
  schemaOrg: {
    host: 'https://www.maevapasteur.com',
    canonicalHost: 'https://www.maevapasteur.com',
    inLanguage: 'fr-FR'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
  alias: {
    '@utils': resolve(__dirname, 'utils'),
    '@data': resolve(__dirname, 'data')
  }
})
