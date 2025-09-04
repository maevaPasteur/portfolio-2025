export interface Client {
    id: string
    title: string
    logo: string
    portrait: string
    isFront: boolean
    isBack: boolean
    isPhpEnv: boolean
    isVue: boolean
    isAngular: boolean
    isReact: boolean
    isDesign: boolean
    isShopify: boolean
    year: number
    job: 'freelance' | 'permanent'
    startup: string | null
    agency: string | null
    filters?: string[]
    keywords?: string[]
}

export const useClientsStore = defineStore('clients', {
    state: () => ({
        selectedFilter: null as string | null,
        clients: [
            {
                id: 'citadium',
                title: 'Citadium',
                logo: '/logos/citadium.svg',
                portrait: '/portraits/citadium.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['FRONT', 'PHP ENV'],
                role: 'Front-End',
                tech: ['HTML', 'CSS', 'JavaScript', 'TWIG'],
                keywords: ['HTML', 'SCSS', 'JAVASCRIPT', 'TWIG', 'ANIMATIONS', 'SEO', 'PERFORMANCES', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/citadium3.png',
                    tablet: '/mockups/citadium1.png',
                    mobile: '/mockups/citadium2.png',
                },
                url: "https://www.citadium.com/"
            },
            {
                id: 'isabel-marant',
                title: 'Isabel Marant',
                logo: '/logos/isabelmarant.svg',
                portrait: '/portraits/isabelmarant.webp',
                startup: "Faume",
                agency: null,
                filters: ["SHOPIFY", "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT', 'TRANSCY'],
                mockups: {
                    desktop: '/mockups/isabel-marant2.png',
                    tablet: '/mockups/isabel-marant1.png',
                    mobile: '/mockups/isabel-marant3.png',
                },
                url: "https://www.isabelmarant-vintage.com/",
            },
            {
                id: 'jimmy-fairly',
                title: 'Jimmy Fairly',
                logo: '/logos/jimmyfairly.svg',
                portrait: '/portraits/jimmyfairly.webp',
                startup: null,
                agency: 'W3lead',
                filters: ["SHOPIFY", "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'SEO', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/jimmy-fairly1.png',
                    tablet: '/mockups/jimmy-fairly2.png',
                    mobile: '/mockups/jimmy-fairly3.png',
                },
                url: 'https://jimmyfairly.com/'
            },
            {
                id: 'lacoste',
                title: 'Lacoste',
                logo: '/logos/lacoste.svg',
                portrait: '/portraits/lacoste.webp',
                startup: 'Faume',
                agency: null,
                filters: ["FRONT", "VUE"],
                role: 'Front-End',
                tech: ['VUE 3', 'Pinia', 'Nuxt', 'SCSS', 'TypeScript'],
                keywords: ['VUE 3', 'NUXT', 'SCSS', 'SEO', 'TYPESCRIPT', 'MAPBOX', 'Atomic Design'],
                mockups: {
                    desktop: '/mockups/lacoste2.png',
                    tablet: '/mockups/lacoste1.png',
                    mobile: '/mockups/lacoste3.png',
                },
                url: 'https://secondemain.lacoste.com/'
            },
            {
                id: 'ami',
                title: 'Ami',
                logo: '/logos/amiparis.svg',
                portrait: '/portraits/amiparis.webp',
                startup: 'W3lead',
                agency: null,
                filters: ["FRONT", "VUE"],
                role: 'Front-End',
                tech: ['VUE 3', 'Pinia', 'Nuxt', 'SCSS', 'TypeScript'],
                keywords: ['VUE 3', 'NUXT', 'SCSS', 'SEO', 'TYPESCRIPT', 'MAPBOX', 'Atomic Design'],
                mockups: {
                    desktop: '/mockups/ami2.png',
                    tablet: '/mockups/ami1.png',
                    mobile: '/mockups/ami3.png',
                },
                url: 'https://forever.amiparis.com/'
            },
            {
                id: 'cabaia',
                title: 'Cabaia',
                logo: '/logos/cabaia.svg',
                portrait: '/portraits/cabaia.webp',
                startup: null,
                agency: "W3lead",
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT', 'TRANSCY'],
                mockups: {
                    desktop: '/mockups/cabaia2.png',
                    tablet: '/mockups/cabaia1.png',
                    mobile: '/mockups/cabaia3.png',
                },
            },
            {
                id: 'claudie-pierlot',
                title: 'Claudie Pierlot',
                logo: '/logos/claudiepierlot.svg',
                portrait: '/portraits/claudiepierlot.webp',
                startup: "Faume",
                agency: null,
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT', 'TRANSCY'],
                mockups: {
                    desktop: '/mockups/claudie-pierlot2.png',
                    tablet: '/mockups/claudie-pierlot3.png',
                    mobile: '/mockups/claudie-pierlot1.png',
                },
                url: "https://secondemain.claudiepierlot.com/"
            },
            {
                id: 'g-star',
                title: 'G-Star',
                logo: '/logos/gstar.svg',
                portrait: '/portraits/gstar.webp',
                startup: "Faume",
                agency: null,
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT', 'TRANSCY'],
                mockups: {
                    desktop: '/mockups/g-star2.png',
                    tablet: '/mockups/g-star1.png',
                    mobile: '/mockups/g-star3.png',
                },
                url: 'https://rewear.g-star.com/'
            },
            {
                id: 'hugo-boss',
                title: 'Hugo Boss',
                logo: '/logos/hugoboss.svg',
                portrait: '/portraits/hugoboss.webp',
                startup: 'Faume',
                agency: null,
                filters: ["FRONT", "VUE"],
                role: 'Front-End',
                tech: ['VUE 3', 'Pinia', 'NUXT', 'SCSS', 'TypeScript'],
                keywords: ['VUE 3', 'NUXT', 'SCSS', 'SEO', 'TYPESCRIPT', 'MAPBOX', 'Atomic Design'],
                mockups: {
                    desktop: '/mockups/hugo-boss2.png',
                    tablet: '/mockups/hugo-boss1.png',
                    mobile: '/mockups/hugo-boss3.png',
                },
            },
            {
                id: 'isotoner',
                title: 'Isotoner',
                logo: '/logos/isotoner.svg',
                portrait: '/portraits/isotoner.webp',
                startup: null,
                agency: "W3lead",
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/isotoner2.png',
                    tablet: '/mockups/isotoner1.png',
                    mobile: '/mockups/isotoner3.png',
                },
                url: 'https://www.isotoner.fr/',
            },
            {
                id: 'leo-violette',
                title: 'Leo Violette',
                logo: '/logos/leoviolette.svg',
                portrait: '/portraits/leoviolette.webp',
                startup: null,
                agency: "W3lead",
                filters: ['SHOPIFY', "FRONT"],
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'MAPBOX', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/leo-et-violette3.png',
                    tablet: '/mockups/leo-et-violette2.png',
                    mobile: '/mockups/leo-et-violette1.png',
                },
                url: 'https://www.leoetviolette.com/'
            },
            {
                id: 'sandro',
                title: 'Sandro',
                logo: '/logos/sandro.svg',
                portrait: '/portraits/sandro.webp',
                startup: 'Faume',
                agency: null,
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT', 'TRANSCY'],
                mockups: {
                    desktop: '/mockups/sandro2.png',
                    tablet: '/mockups/sandro1.png',
                    mobile: '/mockups/sandro3.png',
                },
                url: 'https://secondemain.sandro-paris.com/'
            },
            {
                id: 'petites-jupes-de-prune',
                title: 'Les Petites Jupes de Prune',
                logo: '/logos/petites-jupes-de-prune.svg',
                portrait: '/portraits/les-petites-jupes-de-prune.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'ANIMATIONS', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/petites-jupes-de-prune1.png',
                    tablet: '/mockups/petites-jupes-de-prune2.png',
                    mobile: '/mockups/petites-jupes-de-prune3.png',
                },
                url: 'https://www.lespetitesjupesdeprune.com/'
            },
            {
                id: 'faume-backoffice',
                title: 'Faume Back-Office',
                logo: '',
                portrait: '/portraits/faume-backoffice.webp',
                startup: 'Faume',
                agency: null,
                filters: ['APP', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 2', 'Vuex', 'TypeScript', 'PWA', 'CHARTJS'],
                keywords: ['VUE 2', 'Vuex', 'TypeScript', 'PWA', 'CHARTJS'],
                mockups: {
                    desktop: '/mockups/faume-backoffice2.png',
                    tablet: '/mockups/faume-backoffice1.png',
                    mobile: '/mockups/faume-backoffice3.png',
                },
                url: ''
            },
            {
                id: 'faume-page-builder',
                title: 'Faume Page Builder',
                logo: '',
                portrait: '/portraits/faume-page-builder.webp',
                startup: 'Faume',
                agency: null,
                filters: ['APP', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'TypeScript', 'Tailwind'],
                keywords: ['PAGE BUILDER', 'CMS', 'BLOCS', 'WYSIWYG', 'NUXT', 'VUE 3', 'TYPESCRIPT', 'A/B TEST', 'SEO', 'ANIMATIONS', 'ATOMIC DESIGN'],
                mockups: {
                    image: '/portraits/faume-page-builder.webp'
                },
                url: ''
            },
            {
                id: 'faume-design-system',
                title: 'Faume Design System (Atomic)',
                logo: '',
                portrait: '/portraits/faume-design-system.webp',
                startup: 'Faume',
                agency: null,
                filters: ['DESIGN SYSTEM', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['Figma', 'Storybook', 'Tailwind', 'VUE 3', 'Nuxt', 'TypeScript'],
                keywords: ['ATOMIC DESIGN', 'DESIGN TOKENS', 'THEMING', 'DARK MODE', 'STORYBOOK', 'A11Y', 'TAILWIND', 'VUE 3', 'NUXT', 'PERFORMANCES', 'UX CONSISTENCY'],
                mockups: {},
                url: ''
            },
            {
                id: 'victoria-beckham',
                title: 'Victoria Beckham',
                logo: '',
                portrait: '/portraits/victoria-beckham.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Pinia', 'Nuxt', 'TypeScript', 'SCSS'],
                keywords: ['VUE 3', 'NUXT', 'TYPESCRIPT', 'Atomic Design', 'SEO'],
                mockups: {},
                url: ''
            },
            {
                id: 'carel',
                title: 'Carel',
                logo: '',
                portrait: '/portraits/carel.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT', 'SEO', 'Design System'],
                mockups: {},
                url: ''
            },
            {
                id: 'marni',
                title: 'Marni',
                logo: '',
                portrait: 'portraits/marni.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT', 'Performance'],
                mockups: {},
                url: ''
            },
            {
                id: 'armor-lux',
                title: 'Armor Lux',
                logo: '',
                portrait: '/portraits/armor-lux.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT', 'SEO'],
                mockups: {},
                url: ''
            },
            {
                id: 'sud-express',
                title: 'Sud Express',
                logo: '',
                portrait: '/portraits/sud-express.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT', 'Atomic Design'],
                mockups: {},
                url: ''
            },
            {
                id: 'temperley-london',
                title: 'Temperley London',
                logo: '',
                portrait: '/portraits/temperley-london.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT'],
                mockups: {},
                url: ''
            },
            {
                id: 'kids-around',
                title: 'Kids Around',
                logo: '',
                portrait: '/portraits/kids-around.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT'],
                mockups: {},
                url: ''
            },
            {
                id: 'longchamp',
                title: 'Longchamp',
                logo: '',
                portrait: '/portraits/longchamp.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT'],
                mockups: {},
                url: ''
            },
            {
                id: 'soeur',
                title: 'Soeur',
                logo: '',
                portrait: '/portraits/soeur.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT'],
                mockups: {},
                url: ''
            },
            {
                id: 'bonpoint',
                title: 'Bonpoint',
                logo: '',
                portrait: '/portraits/bonpoint.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT'],
                mockups: {},
                url: ''
            },
            {
                id: 'mali-hakika',
                title: 'Mali Hakika',
                logo: '',
                portrait: '/portraits/mali-hakika.webp',
                startup: null,
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'Vuetify', 'PWA'],
                keywords: ['VUE 3', 'Nuxt', 'Pinia', 'Vuetify', 'PWA'],
                mockups: {},
                url: ''
            },
            {
                id: 'jerome-dreyfuss',
                title: 'Jérôme Dreyfuss',
                logo: '',
                portrait: '/portraits/jerome-dreyfuss.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'PIXEL PERFECT'],
                mockups: {},
                url: ''
            },
            {
                id: 'tara-jarmon',
                title: 'Tara Jarmon',
                logo: '',
                portrait: '/portraits/tara-jarmon.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID'],
                mockups: {},
                url: ''
            },
            {
                id: 'maison-123',
                title: 'Maison 123',
                logo: '',
                portrait: '/portraits/maison123.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID'],
                mockups: {},
                url: ''
            },
            {
                id: 'vanessa-bruno',
                title: 'Vanessa Bruno',
                logo: '',
                portrait: '/portraits/vanessa-bruno.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS'],
                keywords: ['VUE 3', 'NUXT'],
                mockups: {},
                url: ''
            },
            {
                id: 'bash',
                title: 'ba&sh',
                logo: '',
                portrait: '/portraits/bash.webp',
                startup: 'Faume',
                agency: null,
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID'],
                mockups: {},
                url: ''
            },
            {
                id: 'the-kooples',
                title: 'The Kooples',
                logo: '/logos/thekooples.svg',
                portrait: '/portraits/thekooples.webp',
                startup: 'Faume',
                agency: null,
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT', 'TRANSCY'],
            },
            {
                id: 'airbus',
                title: 'Airbus',
                logo: '',
                portrait: '/portraits/airbus.webp',
                startup: null,
                agency: 'Fidesio',
                filters: ['FRONT', 'PHP ENV'],
                role: 'Front-End',
                tech: ['HTML', 'SCSS', 'JavaScript', 'TWIG'],
                keywords: ['HTML', 'SCSS', 'JAVASCRIPT', 'TWIG', 'ANIMATIONS', 'SEO', 'PERFORMANCES', 'PIXEL PERFECT'],
                mockups: {},
                url: ''
            },
            {
                id: 'editions-didier',
                title: 'Éditions Didier',
                logo: '',
                portrait: '/portraits/editions-didier.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'PERFORMANCES', 'PIXEL PERFECT', 'THEME SECTIONS'],
                mockups: {},
                url: ''
            },
            {
                id: 'epycure',
                title: 'Epycure',
                logo: '',
                portrait: '/portraits/epycure.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'A/B TEST', 'PIXEL PERFECT', 'PERFORMANCES'],
                mockups: {},
                url: ''
            },
            {
                id: 'balzac',
                title: 'Balzac Paris',
                logo: '',
                portrait: '/portraits/balzac.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS', 'TypeScript'],
                keywords: ['VUE 3', 'NUXT', 'PINIA', 'SCSS', 'TYPESCRIPT', 'SEO', 'ATOMIC DESIGN', 'DESIGN TOKENS', 'PERFORMANCES'],
                mockups: {},
                url: ''
            },
            {
                id: 'french-bandit',
                title: 'French Bandit',
                logo: '',
                portrait: '/portraits/french-bandit.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'MAPBOX', 'PIXEL PERFECT'],
                mockups: {},
                url: ''
            },
            {
                id: 'butagaz',
                title: 'Butagaz',
                logo: '',
                portrait: '/portraits/butagaz.webp',
                startup: null,
                agency: 'Fidesio',
                filters: ['FRONT', 'PHP ENV'],
                role: 'Front-End',
                tech: ['HTML', 'SCSS', 'JavaScript', 'TWIG'],
                keywords: ['HTML', 'SCSS', 'JAVASCRIPT', 'TWIG', 'PERFORMANCES', 'SEO', 'ACCESSIBILITÉ', 'PIXEL PERFECT'],
                mockups: {},
                url: ''
            },
            {
                id: 'groupe-soufflet',
                title: 'Groupe Soufflet',
                logo: '',
                portrait: '/portraits/groupe-soufflet.webp',
                startup: null,
                agency: 'Fidesio',
                filters: ['FRONT', 'PHP ENV'],
                role: 'Front-End',
                tech: ['HTML', 'SCSS', 'JavaScript', 'TWIG'],
                keywords: ['HTML', 'SCSS', 'JAVASCRIPT', 'TWIG', 'SEO', 'PERFORMANCES', 'ANIMATIONS', 'PIXEL PERFECT'],
                mockups: {},
                url: ''
            },
            {
                id: 'theater-in-paris',
                title: 'Theater in Paris',
                logo: '',
                portrait: '/portraits/theater-in-paris.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'INTERNATIONAL', 'PIXEL PERFECT'],
                mockups: {},
                url: ''
            },
            {
                id: 'aigle',
                title: 'Aigle',
                logo: '',
                portrait: '/portraits/aigle.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS', 'TypeScript'],
                keywords: ['VUE 3', 'NUXT', 'PINIA', 'SCSS', 'TYPESCRIPT', 'SEO', 'PERFORMANCES', 'ANIMATIONS'],
                mockups: {},
                url: ''
            },
            {
                id: 'lancaster',
                title: 'Lancaster',
                logo: '/logos/lancaster.svg',
                portrait: '/portraits/lancaster.webp',
                startup: 'Faume',
                agency: null,
                filters: ['SHOPIFY', "FRONT", "VUE"],
                role: 'Front-End',
                tech: ['Shopify', 'SCSS', 'JavaScript', 'Liquid', 'VUE 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'VUE 2', 'VUEX', 'SEO', 'MAPBOX', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/lancaster2.png',
                    tablet: '/mockups/lancaster1.png',
                    mobile: '/mockups/lancaster3.png',
                },
                url: 'https://seconde-main.lancaster.com/'
            },
        ] as Client[],
    }),

    getters: {
        clientFilters: (state): string[] => {
            const allFilters = state.clients.flatMap(client => client.filters || [])
            return [...new Set(allFilters)].sort()
        },
        filteredClients: (state): Client[] => {
            if (!state.selectedFilter) return state.clients
            return state.clients.filter(client =>
                client.filters?.includes(state.selectedFilter!)
            )
        },
        getAllClients: (state): Client[] => state.clients,
    },

    actions: {
        getClientById(id: string): Client | undefined {
            return this.clients.find(client => client.id === id)
        },
        setSelectedFilter(filter: string | null) {
            this.selectedFilter = filter
        },
        clearSelectedFilter() {
            this.selectedFilter = null
        },
        getPrevNextClientsById(id: string): Client | undefined[] {
            if (!this.clients?.length) return [undefined, undefined];
            const currentIndex = this.clients.findIndex(client => client.id === id);
            if (currentIndex === -1) return [undefined, undefined];
            const prevIndex = currentIndex === 0 ? this.clients.length - 1 : currentIndex - 1;
            const nextIndex = currentIndex === this.clients.length - 1 ? 0 : currentIndex + 1;
            return [this.clients[prevIndex], this.clients[nextIndex]];
        }
    }
})