<template>
    <div>
        <AboutIntroduction/>
        <AboutSkillsTimeline/>
        <AboutCompetences/>
        <AboutExperiencesTimeline/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import AboutExperiencesTimeline from "@/components/pages/about/AboutExperiencesTimeline.vue";
import AboutIntroduction from "@/components/pages/about/AboutIntroduction.vue";
import AboutCompetences from "@/components/pages/about/AboutCompetences.vue";
import AboutSkillsTimeline from "@/components/pages/about/AboutSkillsTimeline.vue";
import Contact from "@/components/sections/Contact.vue";
import Footer from "@/components/sections/Footer.vue";


const { t } = useI18n();

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: t('about.seo.title'),
  description: t('about.seo.description'),
})
</script>