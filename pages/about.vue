<template>
    <div>
        <AboutIntroduction/>
        <AboutSkillsTimeline/>
        <AboutCompetences/>
        <AboutExperiencesTimeline/>
    </div>
</template>

<script setup lang="ts">
import AboutExperiencesTimeline from "@/components/organisms/AboutExperiencesTimeline.vue";
import AboutIntroduction from "@/components/organisms/AboutIntroduction.vue";
import AboutCompetences from "@/components/organisms/AboutCompetences.vue";
import AboutSkillsTimeline from "@/components/organisms/AboutSkillsTimeline.vue";


const { t } = useI18n();

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: t('about.seo.title'),
  description: t('about.seo.description'),
})
</script>