<template>
  <NuxtLink
    v-if="client?.id"
    :to="localePath({ name: 'works-id', params: { id: client.id } })"
    class="group/btn w-[50%] sm:w-auto sm:border min-h-10 sm:min-w-10 bg-gray-900 text-white sm:text-black sm:bg-white px-3 flex items-center justify-center"
  >
    <Icon v-if="isPrevious" name="mdi:arrow-left" />
    <span
      class="sm:max-w-0 overflow-hidden text-ellipsis whitespace-nowrap duration-[700ms] ease group-hover/btn:max-w-xs"
    >
      <span
        class="text-xs sm:text-sm font-mono"
        :class="{ 'pr-2': isNext, 'pl-2': isPrevious }"
      >
        {{ client.title }}
      </span>
    </span>
    <Icon v-if="isNext" name="mdi:arrow-right" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Client } from '~/stores/clients'

const localePath = useLocalePath()

defineProps<{
  client?: Client
  isNext?: boolean
  isPrevious?: boolean
}>()
</script>
