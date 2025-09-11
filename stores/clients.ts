import { clientsData, type Client } from '@data/clients'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    selectedFilter: null as string | null,
    clients: clientsData
  }),

  getters: {
    clientFilters: (): string[] => {
      const counts: Record<string, number> = {}
      clientsData.forEach((client) => {
        client.filters?.forEach((filter) => {
          counts[filter] = (counts[filter] || 0) + 1
        })
      })
      return Object.keys(counts).sort((a, b) => counts[b] - counts[a])
    },
    clientSectors: (): Record<string, { id: string; title: string }[]> => {
      const sectors: Record<string, { id: string; title: string }[]> = {}
      clientsData?.forEach((client) => {
        client.sectors?.forEach((sector) => {
          if (!sectors[sector]) sectors[sector] = []
          const { id, title } = client
          sectors[sector].push({ id, title })
        })
      })
      return sectors
    },
    filteredClients: (state): Client[] => {
      if (!state.selectedFilter) return state.clients
      return state.clients.filter((client) =>
        client.filters?.includes(state.selectedFilter!)
      )
    },
    getAllClients: (state): Client[] => state.clients,
    highlightClients: (state): Client[] =>
      state.clients?.filter((client) => client.portrait?.length)
  },

  actions: {
    getClientById(id: string): Client | undefined {
      return this.clients.find((client) => client.id === id)
    },
    setSelectedFilter(filter: string | null) {
      this.selectedFilter = filter
    },
    clearSelectedFilter() {
      this.selectedFilter = null
    },
    getPrevNextClientsById(id: string): Client | undefined[] {
      if (!this.clients?.length) return [undefined, undefined]
      const currentIndex = this.clients.findIndex((client) => client.id === id)
      if (currentIndex === -1) return [undefined, undefined]
      const prevIndex =
        currentIndex === 0 ? this.clients.length - 1 : currentIndex - 1
      const nextIndex =
        currentIndex === this.clients.length - 1 ? 0 : currentIndex + 1
      return [this.clients[prevIndex], this.clients[nextIndex]]
    }
  }
})
