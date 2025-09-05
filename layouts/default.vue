<template>
  <div class="layout-default min-h-screen bg-white">
      <Header/>
      <main class="relative z-[0]">
          <slot />
      </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/sections/Header.vue";

const { $i18n } = useNuxtApp()
const route = useRoute()

const hreflangs = $i18n.locales.map((locale: any) => {
  const localePath = useLocalePath()
  const href = `https://maevapasteur.com${localePath(route.path, locale.code)}`
  
  return {
    rel: 'alternate',
    hreflang: locale.code,
    href: href
  }
})

hreflangs.push({
  rel: 'alternate', 
  hreflang: 'x-default',
  href: `https://maevapasteur.com${useLocalePath()(route.path, $i18n.defaultLocale)}`
})

useHead({
  link: hreflangs
})
</script>