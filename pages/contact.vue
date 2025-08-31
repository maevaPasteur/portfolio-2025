<template>
    <div class="pt-10 px-6">
        <h1 class="px-6 font-[Neutral] text-9xl">
            <AnimationLetterFromLeft :text="$t('contact.title')"/>
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
    title: t('contact.seo.title'),
    description: t('contact.seo.description'),
})
</script>