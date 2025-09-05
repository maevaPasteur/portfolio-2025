<template>
    <div class="min-h-screen w-full bg-gray-100 flex flex-col items-center">
        <section class="text-center my-auto px-6 text-gray-900">
            <h1 class="text-xl font-mono mb-6">
                <span>{{ $t('contact.title') }}</span>
            </h1>
            <a class="font-[Neutral] text-6xl" href="mailto:maeva.pasteur.pro@gmail.com" target="_blank">
                <AnimationLetterFromLeft :text="email"/>
            </a>
        </section>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/animations/AnimationLetterFromLeft.vue";
import Footer from "@/components/sections/Footer.vue";

const { t } = useI18n();

const email = "maeva.pasteur.pro@gmail.com";

definePageMeta({
    layout: 'default'
})

useSeoMeta({
    title: t('contact.seo.title'),
    description: t('contact.seo.description'),
})
</script>