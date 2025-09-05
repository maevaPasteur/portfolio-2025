<template>
    <section class="px-6 py-8 mt-10 relative">

        <div aria-hidden="true" class="hidden lg:block sticky top-0 left-0 bg-gradient-to-b from-white from-75% to-transparent h-12 w-full z-[1]"></div>

        <div class="flex flex-col lg:flex-row gap-y-8 gap-x-12 items-baseline relative">

            <div v-reveal class="lg:w-[40%] shrink-0 lg:col-span-12 lg:pr-8 lg:sticky lg:z-[2] lg:top-16">
                <h2 class="text-2xl md:text-4xl leading-tight font-semibold tracking-tight">
                    {{ $t('works.sectors.title') }}
                </h2>
                <p class="mt-2 text-sm leading-relaxed text-neutral-600 max-w-lg text-justify">
                    {{ $t('works.sectors.subtitle') }}
                </p>
            </div>

            <div class="flex-grow w-full md:w-auto col-span-12 md:col-span-8 relative z-0">
                <div
                        v-for="(clients, sector) in clientSectors"
                        :key="sector"
                        class="grid md:grid-cols-12 gap-x-6 border-t py-4 md:py-6 first:border-t-0 first:pt-0 items-baseline"
                        v-reveal
                >
                    <div class="md:col-span-4 lg:col-span-5 font-semibold text-sm md:text-lg pb-1 md:pb-0 md:cursor-default cursor-pointer flex items-center justify-between" @click="toggleSector(sector)">
                        <h3>{{ $t(`works.sectors.types.${sector}`) }}</h3>
                        <span class="md:hidden text-xl font-light min-w-[30px] text-center">{{ expandedSectors[sector] ? '−' : '+' }}</span>
                    </div>

                    <Transition name="expand">
                        <ul v-show="expandedSectors[sector]" class="md:col-span-8 lg:col-span-7 flex flex-wrap items-center group -translate-x-1">
                            <template v-for="(client, id) in clients" :key="client.id">
                            <li v-if="id > 0" aria-hidden="true" class="opacity-30 pointer-events-none">
                                <Icon name="mdi:dot" />
                            </li>
                            <li class="group-hover:opacity-50 hover:!opacity-100 transition-opacity py-1 px-1 duration-400 transition-ease">
                                <NuxtLink
                                        :to="localePath({ name: 'works-id', params: { id: client.id } })"
                                        class="text-sm"
                                >
                                    {{ client.title }}
                                </NuxtLink>
                            </li>
                            </template>
                        </ul>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const clientsStore = useClientsStore()
const localePath = useLocalePath()
const { clientSectors } = storeToRefs(clientsStore)

const expandedSectors = ref({})
const isDesktop = ref(false)

const toggleSector = (sector: string) => {
    if (!isDesktop.value) { // Seulement sur mobile
        expandedSectors.value[sector] = !expandedSectors.value[sector]
    }
}

onMounted(() => {
    isDesktop.value = window.innerWidth >= 768
    
    // Initialiser tous les secteurs
    Object.keys(clientSectors.value).forEach(sector => {
        expandedSectors.value[sector] = isDesktop.value // Ouvert sur desktop, fermé sur mobile
    })
    
    // Écouter les changements de taille d'écran
    const handleResize = () => {
        const newIsDesktop = window.innerWidth >= 768
        if (newIsDesktop !== isDesktop.value) {
            isDesktop.value = newIsDesktop
            // Réinitialiser les secteurs selon le nouveau mode
            Object.keys(clientSectors.value).forEach(sector => {
                expandedSectors.value[sector] = isDesktop.value
            })
        }
    }
    
    window.addEventListener('resize', handleResize)
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize)
    })
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
