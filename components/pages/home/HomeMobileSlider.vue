<template>
  <div v-if="clients?.length" ref="mobileSlider" class="relative z-0">
    <NuxtLink
      v-for="(client, clientIndex) in clients"
      :key="client.id"
      :ref="setMobileSlideRef"
      :to="localePath({ name: 'works-id', params: { id: client.id } })"
      :class="[
        'group/mobile-slide mb-8 relative transition-all duration-700 ease-out block mobile-slide-initial',
        clientIndex % 2 === 0 ? 'mr-auto ml-6' : 'ml-auto mr-6'
      ]"
      :style="{ width: '79%' }"
    >
      <span class="pb-1 text-xs font-semibold">{{ client.title }}</span>
      <div
        class="w-full aspect-[4/5] overflow-hidden duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)] will-change-transform"
      >
        <NuxtImg
          :src="client.portrait"
          :alt="client.title"
          class="w-full h-full bg-gray-100 object-cover duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)] transform-gpu will-change-transform"
          width="340"
          height="425"
          sizes="340px"
          densities="x1 x2"
          :preload="clientIndex < 3"
          :loading="clientIndex < 3 ? 'eager' : 'lazy'"
          fit="cover"
        />
      </div>
      <div class="pt-1 text-right font-mono text-xs overflow-hidden">
        <span class="flex gap-2 overflow-hidden">
          <span
            v-for="techno in client.tech"
            :key="techno"
            class="shrink-0 block"
          >{{ techno }}</span
          >
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import type { Ref, ComponentPublicInstance } from 'vue'
import { storeToRefs } from 'pinia'

const localePath = useLocalePath()
const clientsStore = useClientsStore()
const { highlightClients: clients } = storeToRefs(clientsStore)

const mobileSlider: Ref<HTMLElement | null> = ref(null)
const mobileSlideEls: Ref<HTMLElement[]> = ref([])

const setMobileSlideRef = (el: Element | ComponentPublicInstance | null) => {
  if (!el) return

  const htmlEl = '$el' in el ? (el.$el as HTMLElement) : (el as HTMLElement)
  if (
    htmlEl &&
    htmlEl.nodeType === Node.ELEMENT_NODE &&
    !mobileSlideEls.value.includes(htmlEl)
  ) {
    mobileSlideEls.value.push(htmlEl)
  }
}

const initMobileAnimations = async () => {
  if (!mobileSlideEls.value.length || !import.meta.client) return

  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const validSlides = mobileSlideEls.value.filter(
    (slide) =>
      slide &&
      typeof slide.getBoundingClientRect === 'function' &&
      slide.nodeType === Node.ELEMENT_NODE
  )

  validSlides.forEach((slide) => {
    slide.classList.remove('mobile-slide-initial')

    gsap.set(slide, {
      y: 50,
      opacity: 0,
      scale: 1.15
    })

    gsap.to(slide, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0,
      scrollTrigger: {
        trigger: slide,
        start: 'top 95%',
        toggleActions: 'play none none reverse'
      }
    })
  })
}

onMounted(async (): Promise<void> => {
  await nextTick()
  setTimeout(() => {
    initMobileAnimations()
  }, 100)
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    })
  }
})
</script>

<style scoped>
.mobile-slide-initial {
  opacity: 0;
  transform: translateY(50px) scale(0.95);
}
</style>
