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
      tech: ['Shopify',  'Liquid', 'SCSS', 'JavaScript'],
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
    },
      {
        id: 'isotoner',
        title: 'Isotoner',
        logo: '/logos/isotoner.svg',
        portrait: '/portraits/isotoner.webp',
        url: 'https://www.isotoner.fr/',
        startup: null,
        agency: "W3lead",
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
      url: 'https://seconde-main.lancaster.com/'
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
      url: 'https://secondemain.sandro-paris.com/'
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
      url: 'https://secondlove.thekooples.com/'
    }
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