export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    // Import real directives only on client-side
    import('../directives/v-reveal').then(({ vReveal }) => {
      nuxtApp.vueApp.directive('reveal', vReveal)
    })

    import('../directives/v-reveal-group').then(({ vRevealGroup }) => {
      nuxtApp.vueApp.directive('reveal-group', vRevealGroup)
    })
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
