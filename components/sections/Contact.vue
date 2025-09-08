<template>
  <section
    v-reveal-group
    class="px-6 py-12 mt-16 bg-dark flex flex-col gap-6 justify-center items-center bg-gray-50 min-h-[33vh]"
  >
    <h1 class="text-sm md:text-md font-mono text-gray-800 md:text-gray-600">
      <span>{{ $t('contact.title') }}</span>
    </h1>
    <a class="font-[Neutral] text-lg md:text-2xl lg:text-4xl" href="mailto:contact@maevapasteur.com" target="_blank">
      <AnimationLetterFromLeft :text="email"/>
    </a>
  </section>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/animations/AnimationLetterFromLeft.vue";
const email = "contact@maevapasteur.com";
</script>
