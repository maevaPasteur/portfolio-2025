<template>
    <section class="px-6 pt-[100px] overflow-hidden">
        <h1 class="text-lg uppercase mb-2 font-[Neutral]" v-reveal>{{ $t('about.title') }}</h1>
        <p class="font-semibold text-4xl" v-html="$t('about.subtitle')" v-reveal="{delay: 100}"></p>
        <div class="grid grid-cols-3 gap-6 my-[100px] w-[70%] ml-auto" ref="metricsContainer">
            <div
                v-for="i in 3"
                :key="i"
                :ref="el => setColumnRef(el, i-1)"
                class="metric-column"
            >
                <h2 class="mb-3">
                    <span class="block text-8xl font-[Neutral] mb-2">
                        <AnimationLetterFromLeft :text="$t(`about.metrics.${i}.title`)"/>
                    </span>
                    <span v-reveal class="block text-gray-900 font-medium" v-html="$t(`about.metrics.${i}.subtitle`)"></span>
                </h2>
                <p v-reveal="{delay: 100}" class="text-gray-700" v-html="$t(`about.metrics.${i}.text`)"></p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";

gsap.registerPlugin(ScrollTrigger)

const metricsContainer = ref<HTMLElement>()
const columnRefs = ref<(HTMLElement | null)[]>([])

const setColumnRef = (el: HTMLElement | null, index: number) => {
  columnRefs.value[index] = el
}

onMounted(() => {
  columnRefs.value.forEach((column, index) => {
    if (column) {
      const speeds = [100, 0, -100];
      gsap.to(column, {
        y: speeds[index],
        ease: "none",
        scrollTrigger: {
          trigger: metricsContainer.value,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>