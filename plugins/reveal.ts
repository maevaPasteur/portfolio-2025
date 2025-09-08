import type { Directive } from 'vue'

// Stub directives for SSR
const stubDirective: Directive = {
  getSSRProps() {
    return {}
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // Register stub directives for SSR
  nuxtApp.vueApp.directive('reveal', stubDirective)
  nuxtApp.vueApp.directive('reveal-group', stubDirective)
})
