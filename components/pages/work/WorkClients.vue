<template>
    <section v-if="clients?.length">
        <div class="border-b px-6 pb-3 sticky z-[1] pt-10 top-0 bg-white flex gap-3 items-center" v-reveal>
            <p class="font-mono text-xs">{{ $t('client.filter') }}</p>
            <div class="flex wrap gap-2">
                <button
                        v-for="filter in clientFilters"
                        class="border px-2 py-1 text-sm uppercase font-mono duration-[100ms] ease hover:border-black"
                        :class="{'text-white bg-black' : filter === selectedFilter}"
                        @click.prevent="selectedFilter === filter ? selectedFilter = null : selectedFilter = filter"
                >
                    {{ filter }}
                </button>
            </div>
        </div>
        <div class="px-6 relative z-0">
            <ul @mouseleave="setImage(null)">
                <li
                        v-for="(client, i) in clients"
                        class="border-b group/client-li hover:bg-gray-100 duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
                        :class="{'hidden': selectedFilter && !client.filters?.includes(selectedFilter)}"
                        @mouseenter="setImage(client.portrait)"
                        v-reveal
                >
                    <NuxtLink
                            :to="localePath({name: 'works-id', params: {id: client.id}})"
                            class="flex font-[Neutral] pl-[100px] py-3 items-center"
                    >
                        <span class="text-gray-300 pr-3 ease duration-[300ms] shrink-0 min-w-40 text-5xl group-hover/client-li:text-black">{{ getNumber(i+1) }}</span>
                        <h2 class="font-bold text-2xl">{{ client.title }}</h2>
                        <span v-if="client.tech?.length" class="ml-auto pr-3 text-xs font-mono text-gray-400 ease duration-[300ms] group-hover/client-li:text-black">{{ client.tech.join(' ') }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";

const clientsStore = useClientsStore();
const { setImage } = useCursorStore();
const localePath = useLocalePath();

const { clients, clientFilters, selectedFilter } = storeToRefs(clientsStore);

const getNumber = (value: number) => {
    if (value < 10) return `0${value}`;
    return value;
}

onBeforeUnmount(() => {
    setImage(null);
})
</script>