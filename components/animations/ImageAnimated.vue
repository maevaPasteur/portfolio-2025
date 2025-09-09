<template>
  <NuxtImg
    v-if="image"
    v-slot="{ src, imgAttrs, isLoaded }"
    :src="image"
    :alt="alt || 'Maëva Pasteur | Portfolio'"
    :custom="true"
    :width="width"
    :height="height"
    loading="lazy"
    density="x1 x2"
    :sizes="sizes"
  >
    <img
      v-bind="imgAttrs"
      :src="src"
      class="transition-all duration-[1500ms] ease-[cubic-bezier(.19,1,.22,1)]"
      :class="[
        {
          'opacity-0': !isLoaded,
          'opacity-100': isLoaded,
          'translate-y-[50px]': !isLoaded,
          'translate-y-[0px]': isLoaded
        },
        imgClass
      ]"
    />
  </NuxtImg>
</template>

<script setup lang="ts">
defineProps<{
  image?: string
  alt?: string
  imgClass?: string
  width?: number | string
  height?: number | string
  sizes?: string
}>()
</script>
