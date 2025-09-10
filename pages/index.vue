<template>
  <div class="relative z-0">
    <div
      class="top-[80px] md-top-auto fixed md:top-auto md:bottom-8 w-full left-0 px-6 md:px-8 flex flex-col md:flex-col-reverse gap-4 md:gap-8"
    >
      <h2 class="font-[Neutral] text-3xl sm:text-4xl md:text-6xl lg:text-9xl">
        <AnimationLetterFromLeft :text="$t('home.developer')" class="block" />
        <span class="flex">
          <span class="italic relative">
            <span
              :key="currentClient"
              class="relative z-[2] flex anim-text-job"
            >
              <span
                v-for="(letter, i) in $t('home.front')"
                :key="i"
                class="anim-text-job__letter"
              >{{ letter }}</span
              >
            </span>
            <span
              v-if="currentClient"
              :class="colors[currentClient]"
              class="absolute z-[1] block w-full h-full top-0 left-0 transition-background duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
            />
            <span
              class="bg-gray-100 absolute z-0 block w-full h-full top-0 left-0 transition-background duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
            /> </span
          >&nbsp;<AnimationLetterFromLeft text="End" />
        </span>
      </h2>
      <p
        v-reveal
        class="max-w-xl text-sm font-light md:whitespace-break-spaces"
      >
        {{ $t('home.text') }}
      </p>
    </div>
    <HomeSlider v-model="currentClient" />
    <span
      v-reveal
      class="text-sm font-light fixed bottom-8 right-8 font-mono"
    >© 2025</span
    >
  </div>
</template>

<script setup lang="ts">
import HomeSlider from '@/components/pages/home/HomeSlider.vue'
import AnimationLetterFromLeft from '@/components/animations/AnimationLetterFromLeft.vue'

const { t } = useI18n()

const colors = {
  citadium: 'bg-emerald-100',
  'isabel-marant': 'bg-yellow-100',
  'jimmy-fairly': 'bg-sky-100',
  lacoste: 'bg-green-100',
  ami: 'bg-amber-100',
  cabaia: 'bg-cyan-100',
  'claudie-pierlot': 'bg-orange-50',
  'g-star': 'bg-sky-100',
  'hugo-boss': 'bg-amber-50',
  lancaster: 'bg-lime-100',
  'leo-violette': 'bg-amber-50',
  sandro: 'bg-orange-100',
  'the-kooples': 'bg-indigo-100',
  isotoner: 'bg-red-100',
  soeur: 'bg-green-50',
  'french-bandit': 'bg-yellow-50',
  'faume-page-builder': 'bg-teal-100',
  airbus: 'bg-cyan-100',
  'petites-jupes-de-prune': 'bg-pink-100',
  'temperley-london': 'bg-purple-100',
  'kids-around': 'bg-sky-100',
  'faume-design-system': 'bg-rose-100',
  'victoria-beckham': 'bg-teal-100',
  carel: 'bg-red-100',
  'armor-lux': 'bg-blue-100',
  'sud-express': 'bg-yellow-100',
  'mali-hakika': 'bg-blue-100',
  'jerome-dreyfuss': 'bg-amber-50',
  'tara-jarmon': 'bg-yellow-200',
  'maison-123': 'bg-orange-100',
  'vanessa-bruno': 'bg-pink-100',
  bonpoint: 'bg-amber-50',
  bash: 'bg-pink-100',
  'editions-didier': 'bg-green-100',
  epycure: 'bg-yellow-100',
  'faume-backoffice': 'bg-indigo-100',
  balzac: 'bg-orange-100',
  butagaz: 'bg-blue-100',
  'groupe-soufflet': 'bg-amber-100',
  'theater-in-paris': 'bg-red-100',
  aigle: 'bg-yellow-100',
  'leo-pharma': 'bg-zinc-100',
  'account-package': 'bg-blue-100',
  'order-tracking': 'bg-orange-100'
}

const currentClient = ref<null | string>(null)

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: t('home.seo.title'),
  description: t('home.seo.description')
})

// Schéma spécifique à la page d'accueil (globaux gérés par le plugin)
const { defineProfilePage } = useSchemaOrgPersonal()

await nextTick()

useSchemaOrg([defineProfilePage()])
</script>

<style scoped>
@keyframes anim1 {
  0% {
    order: 2;
  }
  10% {
    order: 6;
  }
  20% {
    order: 1;
  }
  30% {
    order: 3;
  }
  40% {
    order: 5;
  }
  50% {
    order: 4;
  }
  60% {
    order: 5;
  }
  70% {
    order: 1;
  }
}
@keyframes anim2 {
  0% {
    order: 2;
  }
  10% {
    order: 1;
  }
  20% {
    order: 6;
  }
  30% {
    order: 2;
  }
  40% {
    order: 5;
  }
  50% {
    order: 4;
  }
  60% {
    order: 1;
  }
  70% {
    order: 4;
  }
}
@keyframes anim3 {
  10% {
    order: 1;
  }
  20% {
    order: 7;
  }
  30% {
    order: 2;
  }
  40% {
    order: 3;
  }
  50% {
    order: 4;
  }
  60% {
    order: 2;
  }
  70% {
    order: 1;
  }
}

.anim-text-job__letter:nth-of-type(odd) {
  animation: anim1 ease 0.7s;
}
.anim-text-job__letter:nth-of-type(even) {
  animation: anim2 ease 0.7s;
}
.anim-text-job__letter:nth-of-type(n + 3) {
  animation: anim3 ease 0.7s;
}
</style>
