<template>
  <div class="min-h-screen w-full bg-gray-100 flex flex-col items-center">
    <section class="text-center my-auto px-6 text-gray-900">
      <h1
        class="font-semibold md:font-normal text-md md:text-xl font-mono mb-4 sm:mb-6"
      >
        <span>{{ $t('contact.title') }}</span>
      </h1>
      <a
        class="sm:font-[Neutral] font-light text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        href="mailto:contact@maevapasteur.com"
        target="_blank"
      >
        <AnimationLetterFromLeft :text="email" class="justify-center" />
      </a>
      <div
        class="mt-16 sm:mt-12 flex justify-center items-center flex-wrap gap-y-3 gap-x-4"
      >
        <a
          v-for="(button, i) in cta"
          :key="i"
          :href="button.pdf"
          target="_blank"
          class="w-full sm:w-auto flex px-4 py-3 border gap-2 justify-center items-center bg-gray-50 font-mono text-sm duration-[700ms] rounded-sm ease hover:bg-white hover:border-gray-400"
        >
          <span>{{ $t(button.text) }}</span>
          <Icon name="mdi:download" />
        </a>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from '@/components/animations/AnimationLetterFromLeft.vue'
import Footer from '@/components/sections/Footer.vue'

const { t, locale } = useI18n()

const email = 'contact@maevapasteur.com'

const cta = computed(() => [
  {
    text: 'contact.download_resume',
    pdf: `/pdf/maeva-pasteur-${locale.value === 'fr' ? 'cv' : 'resume'}.pdf`
  },
  {
    text: 'contact.download_portfolio',
    pdf: '/pdf/maeva-pasteur-portfolio.pdf'
  }
])

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: t('contact.seo.title'),
  description: t('contact.seo.description')
})

const { defineBreadcrumbList, defineContactPage } = useSchemaOrgPersonal()

await nextTick()

useSchemaOrg([defineBreadcrumbList(), defineContactPage()])
</script>
