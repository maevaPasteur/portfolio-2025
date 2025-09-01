<template>
    <div class="min-h-screen from-slate-50 to-slate-200 overflow-hidden relative">
        <div class="sticky top-0 h-screen flex items-start pt-20 flex items-center" ref="timelineWrapper">

            <h2 class="font-[Neutral] text-lg uppercase absolute top-[60px] left-6 z-[3]">
                {{ $t('about.timeline.title') }}
            </h2>

            <div class="timeline-track px-6 z-[1]" ref="timelineTrack">

                <div class="grid grid-cols-[repeat(12,_400px)] gap-3 mb-8">
                    <div
                            v-for="(step, year) in timeline"
                            :key="`year-${year}`"
                            class="year-section flex flex-col items-center"
                    >
                        <p class="text-6xl font-[Neutral] mb-6">
                            <AnimationLetterFromLeft :text="year"/>
                        </p>

                        <div v-if="step.skills?.length > 0" class="w-full max-w-md" v-reveal-group>
                            <p class="text-sm font-medium text-gray-800 mb-2 text-center">{{ $t('about.timeline.skills') }}</p>
                            <div class="flex flex-wrap justify-center gap-1" v-reveal-group>
                              <span
                                      v-for="skill in step.skills"
                                      :key="skill"
                                      class="bg-gray-800 text-white px-2 py-1 text-xs font-mono font-medium hover:bg-black transition-colors"
                              >
                                {{ skill }}
                              </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-[repeat(48,_100px)] gap-3">
                    <template v-for="(step, year, yearIndex) in timeline" :key="`milestones-${year}`">
                        <div
                                v-for="milestone in step.milestones"
                                v-reveal="{delay: 200}"
                                class="milestone-card bg-white p-4 border"
                                :style="{
                    gridColumnStart: 1 + (yearIndex*4) + (milestone.start || 0),
                    gridColumnEnd: 1 + (yearIndex*4) + (milestone.end || 0),
                    gridRowStart: milestone.row || 1
                }"
                        >
                            <div
                                    class="text-xs font-mono uppercase flex items-center gap-2 mb-2 tracking-wide"
                                    :class="{
                       'text-blue-800': milestone.type === 'education',
                       'text-yellow-800': milestone.type === 'experience',
                     }"
                            >
                                <Icon :name="milestone.type === 'education' ? 'mdi:academic-cap-outline' : 'mdi-work-outline'" class="text-sm"/>
                                <span>{{ $t(`about.timeline.labels.${milestone.type}`) }}</span>
                            </div>
                            <h3 class="font-bold text-gray-900 mb-1">
                                {{ $t(`about.timeline.milestones.${milestone.key}.title`) }}</h3>
                            <h4 class="text-sm text-gray-700 mb-1">
                                {{ $t(`about.timeline.milestones.${milestone.key}.subtitle`) }}</h4>
                            <p v-if="$te(`about.timeline.milestones.${milestone.key}.location`)"
                               class="text-xs text-gray-500 mb-2">
                                {{ $t(`about.timeline.milestones.${milestone.key}.location`) }}</p>

                            <div v-if="$te(`about.timeline.milestones.${milestone.key}.projects`)" class="mb-2">
                                <div v-for="(project, key) in $tm(`about.timeline.milestones.${milestone.key}.projects`)"
                                     :key="key"
                                     class="text-xs text-gray-700 mb-1 flex items-start">
                                    <span class="inline-block w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-1 flex-shrink-0"></span>
                                    {{ project }}
                                </div>
                            </div>

                            <div v-if="$te(`about.timeline.milestones.${milestone.key}.bullets`)" class="space-y-1">
                                <div v-for="(bullet, key) in $tm(`about.timeline.milestones.${milestone.key}.bullets`)"
                                     :key="key"
                                     class="text-xs text-gray-700 flex items-start">
                                    <span class="inline-block w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-1 flex-shrink-0"></span>
                                    {{ bullet }}
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-500 z-[2] pointer-events-none">
                <div class="text-xs mb-2">{{ $t('about.timeline.scroll') }}</div>
                <div class="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto relative">
                    <div class="w-1 h-3 bg-gray-300 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
                </div>
            </div>

            <div class="absolute top-0 left-0 w-full h-full flex z-[0] p-3">
                <div class="flex w-full gap-3 pt-[100px]">
                    <span v-for="i in 12" class="bg-gray-50 rounded-xl block w-full"></span>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";

gsap.registerPlugin(ScrollTrigger)

interface Milestone {
    key: string
    type: 'education' | 'experience' | 'projects'
    title: string
    subtitle: string
    location?: string
    projects?: Record<string, string>
    bullets?: Record<string, string>
    year: number
}

const timeline = {
    2013: {
        skills: ["Algorithms basics", "C programming", "Photoshop"],
        milestones: [
            {key: 'edu_bac_science', start: 2, end: 10, row: 1, type: 'education'},
            {key: 'edu_fine_arts', start: 0, end: 4, row: 2, type: 'education'},
        ],
    },
    2015: {
        skills: ["Java", "Arduino"],
        milestones: [],
    },
    2016: {
        skills: ["HTML CSS", "JavaScript", "jQuery", "PHP MySQL", "JSON", "SVG", "Illustrator", "Adobe XD"],
        milestones: [
            {key: 'edu_assoc_frontend', start: 2, end: 10, row: 1, type: 'education'},
        ],
    },
    2017: {
        skills: ["SCSS", "AngularJS", "WordPress", "Bootstrap", "SEO", "Git"],
        milestones: [
            {key: 'edu_exchange_vanier', start: 2, end: 4, row: 2, type: 'education'},
        ],
    },
    2018: {
        skills: ["Angular 2", "Code review", "Zeplin", "CSS Animations", "Front in PHP env (Drupal & Symfony)"],
        milestones: [
            {key: 'edu_bachelor_hetic', start: 2, end: 6, row: 1, type: 'education'},
            {key: 'xp_fidesio', start: 1, end: 5, row: 2, type: 'experience'}
        ],
    },
    2019: {
        skills: ["React", "TypeScript", "UX Design", "Kotlin Arduino", "Shopify Plus", "PWA", "Heroku"],
        milestones: [
            {key: 'edu_master_ecv', start: 2, end: 10, row: 1, type: 'education'},
            {key: 'xp_w3lead', start: 1, end: 9, row: 2, type: 'experience'}
        ],
    },
    2020: {
        skills: ["React & Gatsby", "Vue.js 2 & Vuex", "Node/Express", "MongoDB", "Web performance", "NestJS"],
        milestones: [],
    },
    2021: {
        skills: ["Web Accessibility", "JSON-LD", "Laravel", "Symfony", "Figma", "Mapbox"],
        milestones: [
            {key: 'xp_faume_lead', start: 1, end: 18, row: 2, type: 'experience'},
            {key: 'xp_shopify_consultant', start: 3, end: 5, row: 1, type: 'experience'}
        ],
    },
    2022: {
        skills: ["Lead training sessions for teams", "Git fork process", "ChatGPT"],
        milestones: [],
    },
    2023: {
        skills: ["Storybook", "Prettier & ESLint", "Tailwind", "Chart.js", "Vue.js 3 & Pinia"],
        milestones: [],
    },
    2024: {
        skills: ["AWS", "Solidity", "Atomic design", "Nuxt"],
        milestones: [],
    },
    2025: {
        skills: ["Cloudinary", "Vuetify", "Vercel", "Datadog", "Claude AI"],
        milestones: [
            {key: 'xp_mali_hakika_pwa', start: 0, end: 2, row: 1, type: 'experience'},
        ],
    },
}

const allYears = Object.keys(timeline);

const timelineWrapper = ref<HTMLElement>()
const timelineTrack = ref<HTMLElement>()
const visibleYearStates = ref<Record<number, boolean>>({})
const screenWidth = ref(0)
const timelineContext = ref<gsap.Context | null>(null)

const visibleYears = computed(() => {
    const baseYearsCount = Math.floor(screenWidth.value / 400)
    const minYears = Math.max(3, baseYearsCount)
    const maxYears = Math.min(allYears.length, minYears)
    return allYears.slice(0, maxYears)
})

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth
}

const initScrollAnimation = () => {
    if (!timelineWrapper.value || !timelineTrack.value) return

    const timelineWidth = timelineTrack.value.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollDistance = timelineWidth - viewportWidth

    if (scrollDistance <= 0) return

    // Create GSAP context for this component
    const ctx = gsap.context(() => {
        gsap.set(timelineTrack.value, {x: 0})

        ScrollTrigger.create({
            trigger: timelineWrapper.value.parentElement,
            start: 'top top',
            end: `+=${Math.max(scrollDistance * 2, 2000)}`,
            scrub: 1,
            pin: timelineWrapper.value,
            animation: gsap.fromTo(timelineTrack.value, {
                x: 0
            }, {
                x: -scrollDistance,
                ease: 'none'
            }),
            id: "aboutTimeline" // Add unique identifier
        })
    }, timelineWrapper.value) // Scope context to this component

    // Store context for cleanup
    timelineContext.value = ctx
}

onMounted(() => {
    updateScreenWidth()
    window.addEventListener('resize', updateScreenWidth)

    visibleYears.value.forEach(year => {
        visibleYearStates.value[year] = false
    })

    visibleYearStates.value[visibleYears.value[0]] = true

    setTimeout(() => {
        initScrollAnimation()
    }, 100)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth)
    
    // Clean up GSAP context and associated ScrollTriggers
    if (timelineContext.value) {
        timelineContext.value.kill()
    }
    
    // Fallback: Kill any ScrollTriggers with our specific ID
    ScrollTrigger.getById("aboutTimeline")?.kill()
})
</script>

<style scoped>
.timeline-track {
    will-change: transform;
}
</style>