export default defineNuxtPlugin(async (nuxtApp) => {
  if (import.meta.client) {
    // Import real directives synchronously on client-side
    const { vReveal } = await import('../directives/v-reveal')
    const { vRevealGroup } = await import('../directives/v-reveal-group')

    nuxtApp.vueApp.directive('reveal', vReveal)
    nuxtApp.vueApp.directive('reveal-group', vRevealGroup)
  } else {
    // Stub directives for SSR
    const stubDirective = {
      getSSRProps() {
        return {}
      }
    }

    nuxtApp.vueApp.directive('reveal', stubDirective)
    nuxtApp.vueApp.directive('reveal-group', stubDirective)
  }
})
