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

// SEO Meta
useSeoMeta({
    title: t('works.seo.title'),
    description: t('works.seo.description')
})

// Schema.org JSON-LD
const { definePerson, defineBreadcrumbList, defineServices } = useSchemaOrgPersonal()

// Schema pour la page works avec collection de projets
const defineWorksCollection = () => {
  const { t } = useI18n()
  return {
    '@type': 'CollectionPage',
    name: t('works.seo.title'),
    description: t('works.seo.description'),
    url: 'https://maevapasteur.com/works',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 44, // Nombre approximatif de projets
      itemListElement: [
        { '@type': 'CreativeWork', name: 'Citadium' },
        { '@type': 'CreativeWork', name: 'Isabel Marant' },
        { '@type': 'CreativeWork', name: 'Jimmy Fairly' }
        // ... autres projets
      ]
    },
    creator: {
      '@type': 'Person',
      name: t('schema.person.name')
    }
  }
}

useSchemaOrg([
  definePerson(),
  defineBreadcrumbList(),
  defineWorksCollection(),
  ...defineServices()
])
</script>
