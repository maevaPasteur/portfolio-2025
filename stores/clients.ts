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
    sector?: string
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
                url: "https://www.citadium.com/",
                sectors: ['ecommerce', 'fashion', 'accessories']
            },
            {
                id: 'jimmy-fairly',
                title: 'Jimmy Fairly',
                logo: '/logos/jimmyfairly.svg',
                portrait: '/portraits/jimmyfairly2.webp',
                startup: null,
                agency: 'W3lead',
                filters: ["SHOPIFY", "FRONT"],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'SEO', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/jimmy-fairly1.png',
                    tablet: '/mockups/jimmy-fairly2.png',
                    mobile: '/mockups/jimmy-fairly3.png',
                },
                url: 'https://jimmyfairly.com/',
                sectors: ['ecommerce', 'accessories']
            },
            {
                id: 'lacoste',
                title: 'Lacoste',
                logo: '/logos/lacoste.svg',
                portrait: '/portraits/lacoste3.webp',
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
                url: 'https://secondemain.lacoste.com/',
                sectors: ['ecommerce', 'fashion']
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
                url: 'https://forever.amiparis.com/',
                sectors: ['ecommerce', 'fashion', 'luxury']
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
                sectors: ['ecommerce', 'accessories']
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
                url: 'https://rewear.g-star.com/',
                sectors: ['ecommerce', 'fashion']
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
                sectors: ['ecommerce', 'accessories']
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
                url: 'https://www.leoetviolette.com/',
                sectors: ['ecommerce', 'accessories', 'luxury']
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
                mockups: {
                    desktop: '/mockups/airbus2.png',
                    tablet: '/mockups/airbus1.png',
                    mobile: '/mockups/airbus3.png',
                },
                url: 'https://www.airbus.com/fr',
                sectors: ['aerospace']
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
                url: 'https://www.lespetitesjupesdeprune.com/',
                sectors: ['ecommerce', 'fashion']
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
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS', 'Typescript', 'SEO'],
                keywords: ['VUE 3', 'NUXT', 'Typescript', 'SCSS', 'SEO', 'PINIA'],
                mockups: {
                    desktop: '/mockups/temperley3.png',
                    tablet: '/mockups/temperley2.png',
                    mobile: '/mockups/temperley1.png',
                },
                url: 'https://vintage.temperleylondon.com/',
                sectors: ['ecommerce', 'fashion', 'luxury']
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
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS', 'Typescript'],
                keywords: ['VUE 3', 'NUXT', 'TYPESCRIPT', 'SCSS', 'ES6', 'SEO'],
                mockups: {
                    desktop: '/mockups/kids-around2.png',
                    tablet: '/mockups/kids-around1.png',
                    mobile: '/mockups/kids-around3.png',
                },
                url: 'https://secondround.kidsaround.com/',
                sectors: ['ecommerce', 'fashion', 'luxury']
            },
            {
                id: 'faume-page-builder',
                title: 'Faume Page Builder',
                logo: '',
                portrait: '/portraits/faume-page-builder.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'TypeScript', 'Tailwind'],
                keywords: ['PAGE BUILDER', 'CMS', 'WYSIWYG', 'NUXT', 'VUE 3', 'PINIA', 'TYPESCRIPT', 'SEO', 'ATOMIC DESIGN'],
                mockups: {
                    image: '/portraits/faume-page-builder.webp'
                },
                url: '',
                sectors: ['ecommerce']
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
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/french-bandit2.png',
                    tablet: '/mockups/french-bandit1.png',
                    mobile: '/mockups/french-bandit3.png',
                },
                url: 'https://www.french-bandit.com/',
                sectors: ['ecommerce', 'accessories', 'animal']
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
                url: 'https://secondemain.sandro-paris.com/',
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'faume-design-system',
                title: 'Atomic Design System',
                logo: '',
                portrait: '/portraits/faume-design-system.webp',
                startup: 'Faume',
                agency: null,
                filters: ['DESIGN', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['Figma', 'Storybook', 'VUE 3', 'Nuxt', 'TypeScript'],
                keywords: ['ATOMIC DESIGN', 'THEMING', 'STORYBOOK', 'VUE 3', 'NUXT', 'UI UX Design', 'FIGMA'],
                mockups: {
                    image: '/portraits/faume-design-system.webp'
                },
                url: '',
                sectors: ['ecommerce', 'design']
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
                keywords: ['VUE 3', 'NUXT', 'TYPESCRIPT', 'Atomic Design', 'SEO', 'PINIA'],
                mockups: {
                    desktop: '/mockups/victoria-beckham2.png',
                    tablet: '/mockups/victoria-beckham1.png',
                    mobile: '/mockups/victoria-beckham3.png',
                },
                url: 'https://reloved-archive.victoriabeckham.com/',
                sectors: ['ecommerce', 'fashion', 'luxury']
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
                keywords: ['VUE 3', 'NUXT', 'SEO', 'Atomic Design', 'Typescript'],
                mockups: {
                    desktop: '/mockups/carel3.png',
                    tablet: '/mockups/carel2.png',
                    mobile: '/mockups/carel1.png',
                },
                url: 'https://archives.carel-paris.com/',
                sectors: ['ecommerce', 'accessories']
            },
            /*
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
             */
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
                keywords: ['VUE 3', 'NUXT', 'SEO', 'PINIA', 'SCSS', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/armor-lux3.png',
                    tablet: '/mockups/armor-lux2.png',
                    mobile: '/mockups/armor-lux1.png',
                },
                url: 'https://secondemain.armorlux.com/',
                sectors: ['ecommerce', 'fashion']
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
                keywords: ['VUE 3', 'NUXT', 'Atomic Design', 'PINIA', 'SCSS', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/sud-express2.png',
                    tablet: '/mockups/sud-express1.png',
                    mobile: '/mockups/sud-express3.png',
                },
                url: 'https://secondemain.sudexpress.fr/',
                sectors: ['ecommerce', 'fashion']
            },
            /*
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

             */
            {
                id: 'soeur',
                title: 'Soeur',
                logo: '',
                portrait: '/portraits/soeur.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS', 'Typescript'],
                keywords: ['VUE 3', 'NUXT', 'SCSS', 'SEO', 'TYPESCRIPT', 'MAPBOX', 'Atomic Design'],
                mockups: {
                    desktop: '/mockups/soeur2.png',
                    tablet: '/mockups/soeur1.png',
                    mobile: '/mockups/soeur3.png',
                },
                url: 'https://secondhand.soeur.fr/',
                sectors: ['ecommerce', 'fashion']
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
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'mali-hakika',
                title: 'Mali Hakika',
                logo: '',
                portrait: '/portraits/mali-hakika.webp',
                startup: null,
                agency: null,
                filters: ['FRONT', 'VUE', 'PWA', 'BACK', 'DESIGN'],
                role: 'Front-End',
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'Vuetify', 'PWA'],
                keywords: ['VUE 3', 'Nuxt', 'Pinia', 'Vuetify', 'PWA'],
                mockups: {
                    desktop: '/mockups/mali-hakika2.png',
                    tablet: '/mockups/mali-hakika1.png',
                    mobile: '/mockups/mali-hakika3.png',
                },
                url: '',
                sectors: ['real-estate']
            },
            {
                id: 'jerome-dreyfuss',
                title: 'Jérôme Dreyfuss',
                logo: '',
                portrait: '/portraits/jerome-dreyfuss.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript', 'Vue 2', 'VUEX'],
                keywords: ['SHOPIFY', 'LIQUID', 'PIXEL PERFECT', 'VUE 2', 'VUEX', 'SCSS'],
                mockups: {
                    desktop: '/mockups/jerome-dreyfuss2.png',
                    tablet: '/mockups/jerome-dreyfuss1.png',
                    mobile: '/mockups/jerome-dreyfuss3.png',
                },
                url: 'https://vintage.jerome-dreyfuss.com/',
                sectors: ['ecommerce', 'accessories', 'luxury']
            },
            {
                id: 'tara-jarmon',
                title: 'Tara Jarmon',
                logo: '',
                portrait: '/portraits/tara-jarmon.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript', 'Vue 2', 'Vuex'],
                keywords: ['SHOPIFY', 'LIQUID', 'VUE 2', 'VUEX', 'SCSS', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/tara-jarmon2.png',
                    tablet: '/mockups/tara-jarmon1.png',
                    mobile: '/mockups/tara-jarmon3.png',
                },
                url: 'https://secondemain.tarajarmon.com',
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'maison-123',
                title: 'Maison 123',
                logo: '',
                portrait: '/portraits/maison123.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript', 'Vue 2', 'Vuex'],
                keywords: ['SHOPIFY', 'LIQUID', 'VUE 2', 'VUEX', 'SCSS', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/maison123-3.png',
                    tablet: '/mockups/maison123-2.png',
                    mobile: '/mockups/maison123-1.png',
                },
                url: 'https://secondevie.maison123.com/',
                sectors: ['ecommerce', 'fashion']
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
                tech: ['VUE 3', 'Nuxt', 'Pinia', 'SCSS', 'Typescript'],
                keywords: ['VUE 3', 'NUXT', 'SCSS', 'SEO', 'TYPESCRIPT', 'MAPBOX', 'Atomic Design'],
                mockups: {
                    desktop: '/mockups/vanessa-bruno2.png',
                    tablet: '/mockups/vanessa-bruno1.png',
                    mobile: '/mockups/vanessa-bruno3.png',
                },
                url: 'https://secondemain.vanessabruno.fr/',
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'bonpoint',
                title: 'Bonpoint',
                logo: '',
                portrait: '/portraits/bonpoint.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE', 'SHOPIFY'],
                role: 'Front-End',
                tech: ['VUE 2', 'Vuex', 'Shopify', 'SCSS', 'ES6'],
                keywords: ['VUE 2', 'Vuex', 'Shopify', 'Liquid', 'Scss', 'MapBox', 'JAVASCRIPT', 'ES6'],
                mockups: {
                    desktop: '/mockups/bonpoint2.png',
                    tablet: '/mockups/bonpoint1.png',
                    mobile: '/mockups/bonpoint3.png',
                },
                url: 'https://bonpoint-vintage.com/',
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'bash',
                title: 'ba&sh',
                logo: '',
                portrait: '/portraits/bash.webp',
                startup: 'Faume',
                agency: null,
                filters: ['SHOPIFY', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript', 'VUE'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JavaScript', 'ES6', 'VUE 2', 'VUEX'],
                mockups: {
                    desktop: '/mockups/bash1.png',
                    tablet: '/mockups/bash2.png',
                    mobile: '/mockups/bash3.png',
                },
                url: 'https://seconde-main.ba-sh.com/',
                sectors: ['ecommerce', 'fashion']
            },
            /*
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
                mockups: {

                },
            },

             */
            {
                id: 'editions-didier',
                title: 'Éditions Didier',
                logo: '',
                portrait: '/portraits/editions-didier.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT', 'PHP ENV'],
                role: 'Front-End',
                tech: ['Shopify', 'Liquid', 'SCSS', 'JavaScript'],
                keywords: ['SHOPIFY', 'LIQUID', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'PERFORMANCES', 'PIXEL PERFECT', 'THEME SECTIONS'],
                mockups: {
                    full: '/mockup/editions-didier.png'
                },
                url: '',
                sectors: ['culture']
            },
            {
                id: 'epycure',
                title: 'Epycure',
                logo: '',
                portrait: '/portraits/epycure.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT', 'REACT'],
                role: 'Front-End',
                tech: ['REACT', 'SCSS', 'JavaScript'],
                keywords: ['REACT', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'PIXEL PERFECT', 'PERFORMANCES', 'Atomic Design'],
                mockups: {
                    desktop: '/mockups/epycure1.png',
                    tablet: '/mockups/epycure2.png',
                    mobile: '/mockups/epycure3.png',
                },
                url: 'https://epycure.com/',
                sectors: ['ecommerce', 'beauty']
            },
            {
                id: 'faume-backoffice',
                title: 'Faume Back-Office',
                logo: '',
                portrait: '/portraits/faume-backoffice.webp',
                startup: 'Faume',
                agency: null,
                filters: ['PWA', 'FRONT', 'VUE'],
                role: 'Front-End',
                tech: ['VUE 2', 'Vuex', 'TypeScript', 'PWA', 'CHARTJS'],
                keywords: ['VUE 2', 'Vuex', 'TypeScript', 'PWA', 'CHARTJS'],
                mockups: {
                    desktop: '/mockups/faume-backoffice2.png',
                    tablet: '/mockups/faume-backoffice1.png',
                    mobile: '/mockups/faume-backoffice3.png',
                },
                url: '',
                sectors: ['administration']
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
                keywords: ['VUE 3', 'NUXT', 'PINIA', 'SCSS', 'TYPESCRIPT', 'SEO', 'ATOMIC DESIGN', 'PERFORMANCES'],
                mockups: {
                    desktop: '/mockups/balzac2.png',
                    tablet: '/mockups/balzac1.png',
                    mobile: '/mockups/balzac3.png',
                },
                url: 'https://secondevie.balzac-paris.fr/',
                sectors: ['ecommerce', 'fashion']
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
                mockups: {
                    full: '/mockup/butagaz.png'
                },
                url: '',
                sectors: ['energy']
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
                mockups: {
                    full: '/mockup/groupe-soufflet.png'
                },
                url: '',
                sectors: ['agriculture']
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
                url: "https://secondemain.claudiepierlot.com/",
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'theater-in-paris',
                title: 'Theater in Paris',
                logo: '',
                portrait: '/portraits/theater-in-paris.webp',
                startup: null,
                agency: 'W3lead',
                filters: ['SHOPIFY', 'FRONT', 'PHP ENV'],
                role: 'Front-End',
                tech: ['SCSS', 'JavaScript', 'PHP Env'],
                keywords: ['PHP ENV', 'SCSS', 'JAVASCRIPT', 'ES6', 'SEO', 'INTERNATIONAL', 'PIXEL PERFECT'],
                mockups: {
                    desktop: '/mockups/theater-in-paris1.png',
                    tablet: '/mockups/theater-in-paris2.png',
                    mobile: '/mockups/theater-in-paris3.png',
                },
                url: 'https://www.theatreinparis.com/',
                sectors: ['culture']
            },
            {
                id: 'aigle',
                title: 'Aigle',
                logo: '',
                portrait: '/portraits/aigle.webp',
                startup: 'Faume',
                agency: null,
                filters: ['FRONT', 'VUE', 'SHOPIFY'],
                role: 'Front-End',
                tech: ['Shopify', 'VUE 2', 'Vuex', 'SCSS', 'JavaScript'],
                keywords: ['Shopify', 'VUE 2', 'VUEX', 'SCSS', 'JavaScript', 'SEO', 'PERFORMANCES'],
                mockups: {
                    desktop: '/mockups/aigle2.png',
                    tablet: '/mockups/aigle1.png',
                    mobile: '/mockups/aigle3.png',
                },
                url: 'https://aigle-second-souffle.com/',
                sectors: ['ecommerce', 'fashion']
            },
            {
                id: 'leo-pharma',
                title: 'Doctolien',
                logo: '',
                portrait: '/portraits/leo-pharma.webp',
                startup: null,
                agency: 'Fidesio',
                filters: ['FRONT', 'ANGULAR', 'PWA'],
                role: 'Front-End',
                tech: ['ANGULAR 2', 'CSS', 'TypeScript', 'PWA'],
                keywords: ['ANGULAR 2', 'CSS', 'TypeScript', 'PWA'],
                mockups: {},
                url: null,
                sectors: ['medical']
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
                url: 'https://seconde-main.lancaster.com/',
                sectors: ['ecommerce', 'accessories']
            },
            {
                id: 'account-package',
                title: "Account Package",
                logo: null,
                portrait: null,
                startup: 'Faume',
                agency: null,
                filters: ['VUE', 'FRONT'],
                role: 'Front-End',
                tech: ['VUE 2', 'VUEX', 'JavaScript', 'SCSS', 'NPM'],
                keywords: ['VUE 2', 'VUEX', 'JavaScript', 'SCSS', 'NPM Package', 'ES6', 'CI/CD'],
                mockups: {
                    desktop: '/mockups/account-package2.png',
                    tablet: '/mockups/account-package1.png',
                    mobile: '/mockups/account-package3.png',
                },
                url: null,
                sectors: ['ecommerce']
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
                sectors: ['ecommerce', 'fashion', 'luxury']
            },
            {
                id: 'order-tracking',
                title: "Order Tracking",
                logo: null,
                portrait: null,
                startup: 'Faume',
                agency: null,
                filters: ['VUE', 'FRONT'],
                role: 'Front-End',
                tech: ['VUE 2', 'VUEX', 'JavaScript', 'SCSS', 'NPM'],
                keywords: ['VUE 2', 'VUEX', 'JavaScript', 'SCSS', 'NPM Package', 'ES6', 'CI/CD', 'MONO REPO'],
                mockups: {
                    desktop: '/mockups/order-tracking2.png',
                    tablet: '/mockups/order-tracking1.png',
                    mobile: '/mockups/order-tracking3.png',
                },
                url: null,
                sectors: ['ecommerce']
            },
            {
                id: 'w3lead',
                title: "W3lead",
                logo: null,
                portrait: null,
                startup: null,
                agency: 'W3lead',
                filters: ['REACT', 'FRONT'],
                role: 'Front-End',
                tech: ['REACT', 'GATSBY', 'TypeScript', 'SCSS', 'ANIMATIONS'],
                keywords: ['REACT', 'GATSBY', 'TypeScript', 'SCSS', 'ANIMATIONS', 'SEO', 'ES6'],
                mockups: {
                    image: '/mockups/W3lead.png',
                },
                url: null,
                sectors: ['agency']
            }
        ] as Client[],
    }),

    getters: {
        clientFilters: (state): string[] => {
            const counts: Record<string, number> = {};
            state.clients.forEach(client => {
                client.filters?.forEach(filter => {
                    counts[filter] = (counts[filter] || 0) + 1
                })
            });
            return Object.keys(counts).sort((a, b) => counts[b] - counts[a])
        },
        clientSectors: (state): Record<string, { id: string; title: string }[]> => {
            const sectors: Record<string, { id: string; title: string }[]> = {}
            state.clients?.forEach(client => {
                client.sectors.forEach(sector => {
                    if (!sectors[sector]) sectors[sector] = [];
                    const {id, title} = client;
                    sectors[sector].push({id, title});
                })
            });
            return sectors;
        },
        filteredClients: (state): Client[] => {
            if (!state.selectedFilter) return state.clients
            return state.clients.filter(client =>
                client.filters?.includes(state.selectedFilter!)
            )
        },
        getAllClients: (state): Client[] => state.clients,
        highlightClients: (state): Client[] => state.clients?.filter(client => client.portrait?.length),
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