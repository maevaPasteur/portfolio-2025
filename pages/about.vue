<template>
    <div class="pt-10 px-6">
        <h1 class="px-6 font-[Neutral] text-9xl">
            <AnimationLetterFromLeft :text="$t('about.title')"/>
        </h1>
    </div>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";

const { t } = useI18n();

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: t('about.seo.title'),
  description: t('about.seo.description'),
})
</script>