<template>
  <section v-if="clients?.length" ref="sectionRef">
    <div v-reveal class="border-b md:px-6 pb-3 sticky z-[1] pt-12 md:pt-10 top-0 bg-white block md:flex md-flex-row gap-2 md:gap-3 items-baseline">
      <p class="pl-6 md:pl-0 font-mono text-xs shrink-0 mb-1 md:mb-0">{{ $t('client.filter') }}</p>
      <div class="w-full px-6 md:px-0 flex wrap gap-2 flex-grow overflow-x-auto no-scrollbar">
        <button
          v-for="filter in clientFilters"
          :key="filter"
          class="border shrink-0 px-2 py-1 text-sm uppercase font-mono duration-[100ms] ease hover:border-black"
          :class="{'text-white bg-black' : filter === selectedFilter}"
          @click.prevent="handleFilterClick(filter)"
        >
          {{ filter }}
        </button>
      </div>
    </div>
    <div class="px-6 relative z-0">
      <ul @mouseleave="setImage(null)">
        <li
          v-for="(client, i) in clients"
          :key="i"
          v-reveal
          class="border-b group/client-li hover:bg-gray-100 duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
          :class="{'hidden': selectedFilter && !client.filters?.includes(selectedFilter)}"
          @mouseenter="setImage(client.portrait)"
        >
          <NuxtLink
            :to="localePath({name: 'works-id', params: {id: client.id}})"
            class="flex font-[Neutral] lg:pl-[100px] py-5 md:py-3 items-center"
          >
            <span class="text-gray-300 pr-3 ease duration-[300ms] shrink-0 min-w-20 md:min-w-30 lg:min-w-40 text-3xl lg:text-5xl group-hover/client-li:text-black">{{ getNumber(i+1) }}</span>
            <div class="flex flex-col md:flex-row justify-start md:justify-between lg:pr-3 flex-grow items-start md:items-center gap-1 md:gap-0">
              <h2 class="font-bold text-md md:text-xl lg:text-2xl">{{ client.title }}</h2>
              <span v-if="client.tech?.length" class="text-xs font-mono text-gray-400 ease duration-[300ms] group-hover/client-li:text-black">{{ client.tech.join(' ') }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const clientsStore = useClientsStore();
const { setImage } = useCursorStore();
const localePath = useLocalePath();
const sectionRef = ref(null);

const { clients, clientFilters, selectedFilter } = storeToRefs(clientsStore);

const getNumber = (value: number) => {
    if (value < 10) return `0${value}`;
    return value;
}

const handleFilterClick = (filter: string) => {
    selectedFilter.value = selectedFilter.value === filter ? null : filter;

    // Scroll vers le top de la section
    if (sectionRef.value) {
        sectionRef.value.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

onBeforeUnmount(() => {
    setImage(null);
})
</script>
