<template>
  <div
    v-if="clients?.length"
    ref="slider"
    class="fixed w-full z-0 md:h-full md:top-0 h-[calc(100vh-270px)] bottom-0"
  >
    <div
      ref="sliderWrapper"
      class="md:absolute absolute md:h-full h-full pr-[50vw] pl-[100vw] flex items-center gap-1 md:gap-[100px]"
    >
      <div
        v-for="(client, clientIndex) in clients"
        :key="client.id"
        :ref="setSlideRef"
        class="group/home-slide w-[250px] h-[312px] md:w-[400px] md:h-[500px] shrink-0 relative"
        @mouseenter="handleMouseEnter(client)"
        @mouseleave="handleMouseLeave"
        @click.prevent="(e) => selectImage(e, client)"
      >
        <div
          class="w-full h-full overflow-hidden duration-[1250ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover/home-slide:scale-105 will-change-[transform]"
        >
          <NuxtImg
            :src="client.portrait"
            :alt="client.title"
            class="w-full h-full bg-gray-100 object-cover scale-105 duration-[1250ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover/home-slide:scale-100 transform-gpu will-change-[transform] grayscale group-hover/home-slide:grayscale-0"
            width="400"
            height="500"
            sizes="250px md:400px"
            densities="x1 x2"
            :preload="clientIndex < 3"
            :loading="clientIndex < 3 ? 'eager' : 'lazy'"
            fit="cover"
          />
        </div>
        <span
          class="lg:hidden absolute left-O top-0 w-full pb-1 -translate-y-full text-xs font-semibold"
        >{{ client.title }}</span
        >
        <div
          class="absolute left-0 -bottom-[2%] lg:bottom-auto lg:top-[-2%] w-full pb-1 translate-y-full lg:-translate-y-full text-right font-mono text-xs overflow-hidden"
        >
          <span class="flex gap-2 overflow-hidden">
            <span
              v-for="(techno, i) in client.tech"
              :key="techno"
              :style="{ 'transition-delay': `${i * 50}ms` }"
              class="shrink-0 block lg:opacity-0 duration-[700ms] ease-[cubic-bezier(.19,1,.22,1)] lg:translate-y-2 group-hover/home-slide:translate-y-0 group-hover/home-slide:opacity-100"
            >{{ techno }}</span
            >
          </span>
        </div>
      </div>
    </div>
  </div>
  <div ref="selectedImageEl" class="fixed z-[1]">
    <NuxtImg
      v-if="selectedImage"
      :src="selectedImage"
      alt="Maëva Pasteur - Portfolio"
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import type { Ref } from 'vue'
import type { Client } from '~/stores/clients'
import { storeToRefs } from 'pinia'

interface SliderState {
  target: number
  current: number
  maxScroll: number
  rafId: number
}

interface SliderConfig {
  readonly ease: number
  readonly maxScale: number
  readonly minScale: number
  readonly scaleOffset: number
}

const config: SliderConfig = {
  ease: 0.075,
  maxScale: 1.75,
  minScale: 0.5,
  scaleOffset: 300
} as const

// Configuration mobile
const mobileConfig: SliderConfig = {
  ease: 0.12,
  maxScale: 1.3,
  minScale: 0.7,
  scaleOffset: 200
} as const

const localePath = useLocalePath()
const { setText, clearText } = useCursorStore()
const clientsStore = useClientsStore()

const currentClient = defineModel<string | null>()

const { highlightClients: clients } = storeToRefs(clientsStore)

const slider: Ref<HTMLElement | null> = ref(null)
const sliderWrapper: Ref<HTMLElement | null> = ref(null)
const slideEls: Ref<HTMLElement[]> = ref([])

const selectedImage: Ref<string | null> = ref(null)
const selectedImageEl: Ref<HTMLElement | null> = ref(null)

const sliderState: SliderState = reactive({
  target: 0,
  current: 0,
  maxScroll: 0,
  rafId: 0
})

const windowHalfWidth = computed(() => window?.innerWidth / 2 || 0)
const isDesktop = ref(false)
const touchStart = ref(0)
const touchCurrent = ref(0)
const isDragging = ref(false)

const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value))

const lerp = (start: number, end: number, factor: number): number =>
  start + (end - start) * factor

const setSlideRef = (el: Element | null) => {
  if (!el) return

  const htmlEl = el as HTMLElement
  if (!slideEls.value.includes(htmlEl)) {
    slideEls.value.push(htmlEl)
  }
}

const computeMaxScroll = (): number => {
  if (!sliderWrapper.value) return 0
  return Math.max(0, sliderWrapper.value.offsetWidth - window.innerWidth)
}

const updateScaleAndPosition = () => {
  const wHalf = windowHalfWidth.value

  slideEls.value.forEach((slide: HTMLElement) => {
    const rect = slide.getBoundingClientRect()
    const centerPosition = (rect.left + rect.right) / 2
    const distanceFromCenter = centerPosition - wHalf

    const { scale, offsetX } = calculateTransform(
      distanceFromCenter,
      window.innerWidth
    )

    gsap.set(slide, { scale, x: offsetX })
  })
}

const calculateTransform = (
  distanceFromCenter: number,
  windowWidth: number
) => {
  const currentConfig = isDesktop.value ? config : mobileConfig
  const isRightSide = distanceFromCenter > 0

  if (isRightSide) {
    const scale = Math.min(
      currentConfig.maxScale,
      1 + distanceFromCenter / windowWidth
    )
    const offsetX = (scale - 1) * currentConfig.scaleOffset
    return { scale, offsetX }
  } else {
    const scale = Math.max(
      currentConfig.minScale,
      1 - Math.abs(distanceFromCenter) / windowWidth
    )
    return { scale, offsetX: 0 }
  }
}

const update = () => {
  const currentConfig = isDesktop.value ? config : mobileConfig
  sliderState.current = lerp(
    sliderState.current,
    sliderState.target,
    currentConfig.ease
  )

  if (sliderWrapper.value) {
    gsap.set(sliderWrapper.value, { x: -sliderState.current })
  }

  updateScaleAndPosition()
  sliderState.rafId = requestAnimationFrame(update)
}

const handleWheel = (event: WheelEvent) => {
  if (isDesktop.value) {
    // Desktop: scroll vertical contrôle le slider horizontal
    sliderState.target = clamp(
      sliderState.target + event.deltaY,
      0,
      sliderState.maxScroll
    )
  } else {
    // Mobile: scroll horizontal natif
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      sliderState.target = clamp(
        sliderState.target + event.deltaX,
        0,
        sliderState.maxScroll
      )
    }
  }
}

const handleResize = () => {
  sliderState.maxScroll = computeMaxScroll()
  sliderState.target = clamp(sliderState.target, 0, sliderState.maxScroll)
}

const handleTouchStart = (event: TouchEvent) => {
  if (isDesktop.value) return
  touchStart.value = event.touches[0].clientX
  touchCurrent.value = sliderState.target
  isDragging.value = true
}

const handleTouchMove = (event: TouchEvent) => {
  if (isDesktop.value || !isDragging.value) return

  const touchX = event.touches[0].clientX
  const deltaX = touchStart.value - touchX

  sliderState.target = clamp(
    touchCurrent.value + deltaX * 2, // Multiplication par 2 pour plus de sensibilité
    0,
    sliderState.maxScroll
  )
}

const handleTouchEnd = () => {
  if (isDesktop.value) return
  isDragging.value = false
}

const handleMouseEnter = (client: Client) => {
  if (!isDesktop.value) return
  setText(client.title)
  currentClient.value = client.id
}

const handleMouseLeave = () => {
  if (!isDesktop.value) return
  clearText()
  currentClient.value = null
}

const selectImage = (e: Event, client: Client) => {
  const rect = e.target.getBoundingClientRect()
  const { width, height, top, left } = rect
  clientsStore.selectedClient = client
  selectedImageEl.value.style.transition = 'none'
  selectedImageEl.value.style.width = `${width}px`
  selectedImageEl.value.style.height = `${height}px`
  selectedImageEl.value.style.top = `${top}px`
  selectedImageEl.value.style.left = `${left}px`
  selectedImage.value = client.portrait
  requestAnimationFrame(() => {
    selectedImageEl.value.style.transition = 'cubic-bezier(.19,1,.22,1) 1.5s'
    selectedImageEl.value.style.width = '100%'
    selectedImageEl.value.style.height = '100%'
    selectedImageEl.value.style.top = '0px'
    selectedImageEl.value.style.left = '0px'
    setTimeout(() => {
      navigateTo(localePath({ name: 'works-id', params: { id: client.id } }))
    }, 200)
  })
}

onMounted(async (): Promise<void> => {
  await nextTick()

  isDesktop.value = window.matchMedia('(min-width: 1024px)').matches

  sliderState.maxScroll = computeMaxScroll()

  window.addEventListener('wheel', handleWheel, { passive: true })
  window.addEventListener('resize', handleResize)

  if (!isDesktop.value && sliderWrapper.value) {
    sliderWrapper.value.addEventListener('touchstart', handleTouchStart, {
      passive: true
    })
    sliderWrapper.value.addEventListener('touchmove', handleTouchMove, {
      passive: true
    })
    sliderWrapper.value.addEventListener('touchend', handleTouchEnd, {
      passive: true
    })
  }

  sliderState.rafId = requestAnimationFrame(update)

  const isMobile = window.matchMedia('(max-width: 767px)').matches

  gsap.to(sliderState, {
    target: isMobile
      ? window.innerWidth
      : isDesktop.value
        ? window.innerWidth - 600
        : window.innerWidth * 0.5,
    duration: 1.2,
    ease: isMobile ? 'power2.out' : 'cubic-bezier(0.19, 1, 0.22, 1)',
    delay: isMobile ? 0 : 0.3
  })
})

onBeforeUnmount(() => {
  selectedImage.value = null

  if (sliderState.rafId) {
    cancelAnimationFrame(sliderState.rafId)
  }

  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('resize', handleResize)

  if (!isDesktop.value && sliderWrapper.value) {
    sliderWrapper.value.removeEventListener('touchstart', handleTouchStart)
    sliderWrapper.value.removeEventListener('touchmove', handleTouchMove)
    sliderWrapper.value.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>
