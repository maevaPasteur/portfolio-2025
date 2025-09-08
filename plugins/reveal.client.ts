import { vReveal } from '~/directives/v-reveal'
import { vRevealGroup } from '~/directives/v-reveal-group'

export default defineNuxtPlugin((nuxtApp) => {
  // Override stub directives with real ones on client
  nuxtApp.vueApp.directive('reveal', vReveal)
  nuxtApp.vueApp.directive('reveal-group', vRevealGroup)
})
