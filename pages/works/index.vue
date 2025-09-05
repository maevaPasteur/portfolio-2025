<template>
    <div class="pt-[100px]">
        <h1 class="px-6 font-[Neutral] text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            <AnimationLetterFromLeft :text="$t('works.title')"/>
        </h1>
        <WorkLogos class="mt-12 mb-6"/>
        <WorkClients/>
        <WorkSectors/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/animations/AnimationLetterFromLeft.vue";
import WorkLogos from "@/components/pages/work/WorkLogos.vue";
import WorkClients from "@/components/pages/work/WorkClients.vue";
import WorkSectors from "@/components/pages/work/WorkSectors.vue";
import Contact from "@/components/sections/Contact.vue";
import Footer from "@/components/sections/Footer.vue";

const { t } = useI18n();

definePageMeta({
  layout: 'default'
})

useSeoMeta({
    title: t('works.seo.title'),
    description: t('works.seo.description'),
})
</script>