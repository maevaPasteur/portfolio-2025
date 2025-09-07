
<template>
    <section ref="root" class="relative bg-white" :style="{ height: scrollContainerHeight + 'px' }">
        <div ref="stage" class="sticky top-0 h-screen w-full bg-white z-10 overflow-hidden">
            <div ref="barsWrap" class="about-skills-bars absolute inset-x-1 md:inset-x-6 top-0 left-0 pt-28 lg:pt-36 pb-6 h-full flex items-center">
                <div class="w-full h-full flex flex-col gap-2">
                    <div v-for="s in skills" :key="s.label" class="relative h-full overflow-hidden">
                        <div class="bg-gray-50 absolute inset-x-0 top-0 h-full rounded-md">
                            <div class="absolute inset-0" />
                        </div>
                        <div
                                class="about-skills-bar absolute top-0 h-full"
                                :data-start="s.start" :data-end="s.end"
                        >
                            <div
                                    class="about-skills-fill h-full overflow-hidden p-[2px]"
                                    :data-start="s.start" :data-end="s.end"
                                    style="width: 0%"
                            >
                                <div class="h-full flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                  <span class="inline-flex items-center min-w-full px-1 md:px-3 py-1 text-xs lg:text-sm font-mono bg-white border rounded-md overflow-visible">
                    {{ s.label }}
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-reveal class="absolute top-14 left-6 right-6 sm:left-10 sm:right-10 md:left-16 md:right-16">
                <div class="relative h-16">
                    <div class="absolute left-0 right-0 top-5 h-[2px] bg-black"></div>
                    <div class="about-skills-marker absolute -translate-x-1/2 top-[14px]">
                        <div class="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <div
                            v-for="(y, i) in Array.from({ length: (years.max - years.min) + 1 }, (_, k) => years.min + k)"
                            :key="`tick-${y}`"
                            class="about-skills-tick absolute -translate-x-1/2 opacity-40 transition-opacity top-4"
                            :class="{'hidden md:block': i%2 !== 0}"
                            :style="{ left: toPct(y) + '%' }"
                            :data-year="y"
                    >
                        <div class="mx-auto w-2.5 h-2.5 bg-black rounded-full"></div>
                        <div class="-translate-y-[35px] md:translate-y-0 mt-2 text-xs md:text-lg md:text-xl font-semibold text-black">{{ y }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type Skill = { label: string; start: number; end: number; bgColor: string }

const years = { min: 2016, max: 2026 }
const range = years.max - years.min

const skills: Skill[] = [
    { label: 'CSS SCSS', start: 2016, end: 2025.5, bgColor: 'bg-gray-100' },
    { label: 'JavaScript', start: 2016, end: 2025.5, bgColor: 'bg-gray-200' },
    { label: 'PHP SQL', start: 2016.5, end: 2020, bgColor: 'bg-gray-50' },
    { label: 'TWIG', start: 2017, end: 2025.5, bgColor: 'bg-gray-50' },
    { label: 'Wordpress', start: 2017, end: 2019, bgColor: 'bg-gray-50' },
    { label: 'Bootstrap', start: 2017, end: 2019, bgColor: 'bg-gray-50' },
    { label: 'Angular', start: 2017, end: 2019, bgColor: 'bg-gray-50' },
    { label: 'React Gatsby', start: 2018, end: 2020, bgColor: 'bg-pink-50' },
    { label: 'Typescript', start: 2018, end: 2025.5, bgColor: 'bg-gray-200' },
    { label: 'Shopify', start: 2018.5, end: 2025.5, bgColor: 'bg-green-100' },
    { label: 'Vue 2 Vuex', start: 2019, end: 2025.5, bgColor: 'bg-cyan-100' },
    { label: 'Node Express MongoDB', start: 2019, end: 2025.5, bgColor: 'bg-gray-200' },
    { label: 'Laravel Symfony', start: 2019, end: 2021, bgColor: 'bg-gray-50' },
    { label: 'Vue 3 Pinia NUXT', start: 2022.5, end: 2025.5, bgColor: 'bg-cyan-100' },
    { label: 'Tailwind', start: 2023, end: 2025.5, bgColor: 'bg-gray-200' },
    { label: 'Vuetify', start: 2024.5, end: 2025.5, bgColor: 'bg-cyan-100' },
]

const root = ref<HTMLElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const barsWrap = ref<HTMLElement | null>(null)
const barEls = ref<HTMLElement[]>([])
const fillEls = ref<HTMLElement[]>([])
const tickEls = ref<HTMLElement[]>([])
const scrollContainerHeight = ref(0)
let ctx: gsap.Context | null = null

const toPct = (y: number) => ((y - years.min) / (years.max - years.min)) * 100

onMounted(async () => {
    gsap.registerPlugin(ScrollTrigger)
    await nextTick()

    ctx = gsap.context(() => {
        barEls.value = Array.from(stage.value!.querySelectorAll<HTMLElement>('.about-skills-bar'))
        fillEls.value = Array.from(stage.value!.querySelectorAll<HTMLElement>('.about-skills-fill'))
        tickEls.value = Array.from(stage.value!.querySelectorAll<HTMLElement>('.about-skills-tick'))

        barEls.value.forEach((el) => {
            const s = Number(el.dataset.start)
            const e = Number(el.dataset.end)
            el.style.left = `${toPct(s)}%`
            el.style.width = `${toPct(e) - toPct(s)}%`
        })

        scrollContainerHeight.value = window.innerHeight * 3
        
        const st = ScrollTrigger.create({
            id: 'about-skills',
            trigger: root.value,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            pin: stage.value,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
            onUpdate: ({ progress }) => {
                const y = years.min + progress * (years.max - years.min)
                fillEls.value.forEach((el) => {
                    const s = Number(el.dataset.start)
                    const e = Number(el.dataset.end)
                    const r = y <= s ? 0 : y >= e ? 1 : (y - s) / (e - s)
                    
                    // Calculer la largeur basée sur l'animation normale
                    let widthPct = r * 100
                    
                    // Si l'animation est terminée (r = 1), vérifier si le contenu nécessite plus d'espace
                    if (r >= 1) {
                        const contentEl = el.querySelector('span')
                        if (contentEl) {
                            const contentWidth = contentEl.scrollWidth + 8 // +8 pour le padding
                            const parentWidth = el.parentElement?.offsetWidth || 0
                            const minWidthPct = (contentWidth / parentWidth) * 100
                            
                            // Si le contenu nécessite plus d'espace, continuer l'animation
                            if (minWidthPct > 100) {
                                // Calculer le progrès supplémentaire nécessaire
                                const extraProgress = (y - e) / (years.max - e)
                                const clampedExtraProgress = Math.min(1, Math.max(0, extraProgress))
                                widthPct = 100 + (minWidthPct - 100) * clampedExtraProgress
                            }
                        }
                    }
                    
                    gsap.set(el, { width: `${widthPct}%` })
                })
                const markerPct = Math.min(100, Math.max(0, toPct(y)))
                gsap.set('.about-skills-marker', { left: `${markerPct}%` })
                tickEls.value.forEach((t) => {
                    const ty = Number(t.dataset.year)
                    t.classList.toggle('opacity-100', y >= ty - 0.001)
                    t.classList.toggle('opacity-40', y < ty - 0.001)
                })
            }
        })

        ScrollTrigger.refresh()

        return () => {
            st.kill()
        }
    }, root.value!)
})

onBeforeUnmount(() => {
    ctx?.revert()
})
</script>
