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

            <div class="flex-grow col-span-3 md:col-span-8 relative z-0">
                <div
                        v-for="(clients, sector) in clientSectors"
                        :key="sector"
                        class="grid md:grid-cols-12 gap-x-6 border-t py-4 md:py-6 first:border-t-0 first:pt-0"
                        v-reveal
                >
                    <h3 class="md:col-span-4 lg:col-span-5 font-semibold text-lg md:text-sm pb-1 md:pb-0">
                        {{ $t(`works.sectors.types.${sector}`) }}
                    </h3>

                    <ul class="md:col-span-8 lg:col-span-7 flex flex-wrap items-center group">
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
