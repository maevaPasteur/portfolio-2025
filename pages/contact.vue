<template>
    <div class="min-h-screen w-full bg-gray-100 flex flex-col items-center">
        <section class="text-center my-auto px-6 text-gray-900">
            <h1 class="font-semibold md:font-normal text-md md:text-xl font-mono mb-6">
                <span>{{ $t('contact.title') }}</span>
            </h1>
            <a class="sm:font-[Neutral] font-light text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" href="mailto:contact@maevapasteur.com" target="_blank">
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

const email = "contact@maevapasteur.com";

definePageMeta({
    layout: 'default'
})

// SEO Meta
useSeoMeta({
    title: t('contact.seo.title'),
    description: t('contact.seo.description'),
})

// Schema.org JSON-LD
const { definePerson, defineBreadcrumbList } = useSchemaOrgPersonal()

// Schema ContactPage
const defineContactPage = () => {
  const { t } = useI18n()
  return {
    '@type': 'ContactPage',
    name: t('contact.seo.title'),
    description: t('contact.seo.description'),
    url: 'https://maevapasteur.com/contact',
    mainEntity: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@maevapasteur.com',
      url: 'https://maevapasteur.com/contact',
      areaServed: {
        '@type': 'Country',
        name: 'France'
      },
      availableLanguage: ['French', 'English']
    },
    about: {
      '@type': 'Person',
      name: t('schema.person.name')
    }
  }
}

useSchemaOrg([
  definePerson(),
  defineBreadcrumbList(),
  defineContactPage()
])
</script>