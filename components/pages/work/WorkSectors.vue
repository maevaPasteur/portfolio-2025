<template>
    <section class="px-6 py-8 mt-10 relative">

        <div aria-hidden="true" class="sticky top-0 left-0 bg-gradient-to-b from-white from-75% to-transparent h-12 w-full block z-[1]"></div>

        <div class="flex gap-y-8 gap-x-12 items-baseline relative">

            <div v-reveal class="w-[40%] shrink-0 col-span-12 md:col-span-4 pr-8 sticky z-[2] top-16">
                <h2 class="text-4xl leading-tight font-semibold tracking-tight">
                    {{ $t('works.sectors.title') }}
                </h2>
                <p class="mt-2 text-sm leading-relaxed text-neutral-600 max-w-lg text-justify">
                    {{ $t('works.sectors.subtitle') }}
                </p>
            </div>

            <div class="flex-grow col-span-12 md:col-span-8 relative z-0">
                <div
                        v-for="(clients, sector) in clientSectors"
                        :key="sector"
                        class="grid grid-cols-12 gap-x-6 border-t py-6 first:border-t-0 first:pt-0"
                        v-reveal
                >
                    <h3 class="col-span-12 md:col-span-5 font-semibold">
                        {{ $t(`works.sectors.types.${sector}`) }}
                    </h3>

                    <ul class="col-span-12 md:col-span-7 flex gap-x-1 gap-y-2 flex-wrap items-end group">
                        <template v-for="(client, id) in clients" :key="client.id">
                            <li v-if="id > 0" aria-hidden="true" class="opacity-30 pointer-events-none">
                                <Icon name="mdi:dot" />
                            </li>
                            <li class="group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-400 transition-ease">
                                <NuxtLink
                                        :to="localePath({ name: 'works-id', params: { id: client.id } })"
                                        class="text-sm"
                                >
                                    {{ client.title }}
                                </NuxtLink>
                            </li>
                        </template>
                    </ul>
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
</script>
