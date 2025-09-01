<template>
    <div v-if="clients?.length" ref="slider" class="fixed h-full w-full z-0">
        <div
                ref="sliderWrapper"
                class="absolute h-full w-[12000px] px-[600px] flex items-center gap-[100px]"
        >
            <div
                    v-for="client in clients"
                    :key="client.id"
                    class="group/home-slide w-[400px] h-[500px] shrink-0 relative"
                    :ref="setSlideRef"
                    @mouseenter="handleMouseEnter(client)"
                    @mouseleave="handleMouseLeave"
                    @click.prevent="e => selectImage(e, client)"
            >
                <div class="w-full h-full overflow-hidden duration-[1250ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover/home-slide:scale-105 will-change-[transform]">
                    <NuxtImg
                            :src="client.portrait"
                            :alt="client.title"
                            class="w-full h-full object-cover scale-105 duration-[1250ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover/home-slide:scale-100 transform-gpu will-change-[transform] grayscale group-hover/home-slide:grayscale-0"
                            loading="lazy"
                    />
                </div>
                <div class="absolute left-0 top-[-2%] w-full pb-1 -translate-y-full text-right font-mono text-xs overflow-hidden">
                    <span class="flex gap-2 overflow-hidden">
                        <span
                                v-for="(techno, i) in client.tech"
                                :style="{'transition-delay': `${i*50}ms`}"
                                class="shrink-0 block opacity-0 duration-[700ms] ease-[cubic-bezier(.19,1,.22,1)] translate-y-2 group-hover/home-slide:translate-y-0 group-hover/home-slide:opacity-100"
                        >{{ techno }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div
            class="fixed z-[1]"
            ref="selectedImageEl"
    >
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
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import gsap from 'gsap'
import type { Ref } from 'vue'
import type { Client } from '~/stores/clients'

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

const localePath = useLocalePath()
const { setText, clearText } = useCursorStore();
const clientsStore = useClientsStore();

const currentClient = defineModel<string | null>();

const clients: Client[] = clientsStore.clients;

const slider: Ref<HTMLElement | null> = ref(null);
const sliderWrapper: Ref<HTMLElement | null> = ref(null);
const slideEls: Ref<HTMLElement[]> = ref([]);

const selectedImage: Ref<string | null> = ref(null);
const selectedImageEl: Ref<HTMLElement | null> = ref(null);

const sliderState: SliderState = reactive({
  target: 0,
  current: 0,
  maxScroll: 0,
  rafId: 0
})

const windowHalfWidth = computed(() => window?.innerWidth / 2 || 0)

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
    
    const { scale, offsetX } = calculateTransform(distanceFromCenter, window.innerWidth)
    
    gsap.set(slide, { scale, x: offsetX })
  })
}

const calculateTransform = (distanceFromCenter: number, windowWidth: number) => {
  const isRightSide = distanceFromCenter > 0
  
  if (isRightSide) {
    const scale = Math.min(config.maxScale, 1 + distanceFromCenter / windowWidth)
    const offsetX = (scale - 1) * config.scaleOffset
    return { scale, offsetX }
  } else {
    const scale = Math.max(config.minScale, 1 - Math.abs(distanceFromCenter) / windowWidth)
    return { scale, offsetX: 0 }
  }
}

const update = () => {
  sliderState.current = lerp(sliderState.current, sliderState.target, config.ease)
  
  if (sliderWrapper.value) {
    gsap.set(sliderWrapper.value, { x: -sliderState.current })
  }
  
  updateScaleAndPosition()
  sliderState.rafId = requestAnimationFrame(update)
}

const handleWheel = (event: WheelEvent) => {
  sliderState.target = clamp(
    sliderState.target + event.deltaY, 
    0, 
    sliderState.maxScroll
  )
}

const handleResize = () => {
  sliderState.maxScroll = computeMaxScroll()
  sliderState.target = clamp(sliderState.target, 0, sliderState.maxScroll)
}

const handleMouseEnter = (client: Client) => {
  setText(client.title);
    currentClient.value = client.id;
};

const handleMouseLeave = () => {
  clearText();
    currentClient.value = null;
};

const selectImage = (e: Event, client: Client) => {
    const rect = e.target.getBoundingClientRect();
    const { width, height, top, left } = rect;
    clientsStore.selectedClient = client;
    selectedImageEl.value.style.transition = 'none';
    selectedImageEl.value.style.width = `${width}px`;
    selectedImageEl.value.style.height = `${height}px`;
    selectedImageEl.value.style.top = `${top}px`;
    selectedImageEl.value.style.left = `${left}px`;
    selectedImage.value = client.portrait;
    requestAnimationFrame(() => {
        selectedImageEl.value.style.transition = 'cubic-bezier(.19,1,.22,1) 1.5s';
        selectedImageEl.value.style.width = '100%';
        selectedImageEl.value.style.height = '100%';
        selectedImageEl.value.style.top = '0px';
        selectedImageEl.value.style.left = '0px';
        setTimeout(() => {
            navigateTo(localePath({name: 'works-id', params: {id: client.id}}))
        }, 200)
    });
}

onMounted(async (): Promise<void> => {
  await nextTick()
  
  sliderState.maxScroll = computeMaxScroll()
  
  window.addEventListener('wheel', handleWheel, { passive: true })
  window.addEventListener('resize', handleResize)
  
  sliderState.rafId = requestAnimationFrame(update)
})

onBeforeUnmount(() => {
    selectedImage.value = null;

  if (sliderState.rafId) {
    cancelAnimationFrame(sliderState.rafId)
  }
  
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('resize', handleResize)
});
</script>
