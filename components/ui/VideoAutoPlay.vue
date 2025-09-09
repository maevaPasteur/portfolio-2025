<template>
  <ClientOnly>
    <video
      ref="videoEl"
      loop
      muted
      autoplay
      playsinline
      preload="none"
      disablepictureinpicture
      controlslist="nodownload noplaybackrate noremoteplayback"
      webkit-playsinline
      class="w-full h-auto block"
    >
      <source :src="video" :type="type" />
    </video>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps<{
  video: string
}>()

const videoEl = ref<HTMLVideoElement | null>(null)
const inView = ref(false)

let observer: IntersectionObserver | null = null

const type = computed(() => {
  if (!props.video) return null
  return props.video.includes('.webm') ? 'video/webm' : 'video/mp4'
})

onMounted(() => {
  if (!videoEl.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      inView.value = entry.isIntersecting
      if (entry.isIntersecting) {
        queueMicrotask(() => videoEl.value?.play().catch(() => {}))
      } else {
        videoEl.value?.pause()
      }
    },
    { threshold: 0.25 }
  )
  observer.observe(videoEl.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
