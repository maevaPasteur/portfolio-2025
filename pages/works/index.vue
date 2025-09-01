<template>
    <div class="py-[100px]">
        <h1 class="px-6 font-[Neutral] text-9xl">
            <AnimationLetterFromLeft :text="$t('works.title')"/>
        </h1>
        <LogoList class="mt-12 mb-6"/>
        <div class="border-b px-6 pb-3 sticky z-[1] pt-10 top-0 bg-white flex gap-3 items-center" v-reveal>
            <p class="font-mono text-xs">Filtrer par :</p>
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
            <ul @mouseleave="setImage(null)" v-reveal-group>
                <li
                        v-for="(client, i) in clients"
                        class="border-b group/client-li hover:bg-gray-100 duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
                        :class="{'hidden': selectedFilter && !client.filters?.includes(selectedFilter)}"
                        @mouseenter="setImage(client.portrait)"
                >
                    <NuxtLink
                            :to="localePath({name: 'words', params: {id: client.id}})"
                            class="flex font-[Neutral] pl-[100px] py-3 items-center"
                    >
                        <span class="text-gray-300 pr-3 ease duration-[300ms] shrink-0 min-w-40 text-5xl group-hover/client-li:text-black">{{ getNumber(i+1) }}</span>
                        <h2 class="font-bold text-2xl">{{ client.title }}</h2>
                        <span v-if="client.tech?.length" class="ml-auto pr-3 text-xs font-mono text-gray-400 ease duration-[300ms] group-hover/client-li:text-black">{{ client.tech.join(' ') }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";
import {storeToRefs} from "pinia";
import LogoList from "@/components/organisms/LogoList.vue";

const clientsStore = useClientsStore();
const { setImage } = useCursorStore();
const localePath = useLocalePath();
const { t } = useI18n();

const { clients, clientFilters, selectedFilter } = storeToRefs(clientsStore);

const getNumber = (value: number) => {
    if (value < 10) return `0${value}`;
    return value;
}

definePageMeta({
  layout: 'default'
})

useSeoMeta({
    title: t('works.seo.title'),
    description: t('works.seo.description'),
})
</script>