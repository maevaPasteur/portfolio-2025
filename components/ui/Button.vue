<template>
  <NuxtLink
    v-if="to"
    class="text-xs font-mono flex gap-2 items-center text-white bg-gray-900 w-fit px-4 py-2 hover:bg-gray-900"
    :to="to"
    :target="isExternalLink ? '_blank' : ''"
  >
    <span
    ><slot>{{ text }}</slot></span
    >
    <Icon v-if="icon" :name="icon" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string
  to: object | string
  text?: string
}>()

const isExternalLink = computed(
  () =>
    props?.to &&
    typeof props.to === 'string' &&
    (props.to.startsWith('http') || props.to.startsWith('www.'))
)
</script>
