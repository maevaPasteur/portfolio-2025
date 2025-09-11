<template>
  <div
    ref="cursorFollower"
    class="cursor fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center duration-[50ms] ease-in-out mix-blend-difference"
    style="will-change: transform; transform: translate3d(0, 0, 0)"
    aria-hidden="true"
  >
    <div
      class="cursor__circle w-[8px] h-[8px] bg-white rounded-full duration-200 ease-in-out"
    />
    <div
      v-if="hasText"
      class="ml-3 text-sm font-medium text-white whitespace-nowrap"
    >
      {{ text }}
    </div>
    <NuxtImg
      v-if="hasImage"
      :src="image"
      :alt="text || 'Image'"
      loading="lazy"
      v-bind="imagesSizes?.cursor"
      class="invert absolute top-0 left-0 translate-x-[50px] w-[100px] h-[140px] max-w-none object-cover"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { imagesSizes } from '@utils/images-sizes'

interface CursorPosition {
  x: number
  y: number
}

const cursorStore = useCursorStore()
const { text, hasText, image, hasImage } = storeToRefs(cursorStore)

const cursorFollower: Ref<HTMLElement | null> = ref(null)

const mousePosition: CursorPosition = { x: 0, y: 0 }
let rafId = 0

const updateCursor = () => {
  if (!cursorFollower.value) return

  cursorFollower.value.style.transform = `translate3d(${mousePosition.x - 5}px, ${mousePosition.y - 5}px, 0)`
  rafId = requestAnimationFrame(updateCursor)
}

const handleMouseMove = (event: MouseEvent) => {
  mousePosition.x = event.clientX
  mousePosition.y = event.clientY
}

const handleMouseEnter = () => {
  if (cursorFollower.value) {
    cursorFollower.value.style.opacity = '1'
  }
}

const handleMouseLeave = () => {
  if (cursorFollower.value) {
    cursorFollower.value.style.opacity = '0'
  }
}

onMounted(() => {
  if (!import.meta.client) return

  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseenter', handleMouseEnter)
  document.addEventListener('mouseleave', handleMouseLeave)

  rafId = requestAnimationFrame(updateCursor)
})

onBeforeUnmount(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }

  if (import.meta.client) {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseenter', handleMouseEnter)
    document.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<style lang="scss">
.cursor {
  $self: &;

  &:has(~ .layout-default a:hover) {
    #{$self}__circle {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
