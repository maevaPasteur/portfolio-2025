<template>
  <div class="relative z-0">
      <div class="fixed bottom-8 left-8 flex flex-col-reverse gap-8">
          <h2 class="font-[Neutral] text-9xl">
              <AnimationLetterFromLeft :text="$t('home.developer')" class="block"/>
              <span class="flex">
                  <span class="italic relative">
                      <span :key="currentClient" class="relative z-[2] flex anim-text-job"><span class="anim-text-job__letter" v-for="letter in $t('home.front')">{{ letter }}</span></span>
                      <span
                              v-if="currentClient"
                              :class="colors[currentClient]"
                              class="absolute z-[1] block w-full h-full top-0 left-0 transition-background duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
                      ></span>
                      <span class="bg-gray-100 absolute z-0 block w-full h-full top-0 left-0 transition-background duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"></span>
                  </span>&nbsp;<AnimationLetterFromLeft text="End"/>
              </span>
          </h2>
          <p v-reveal class="max-w-xl text-sm font-light md:whitespace-break-spaces">{{ $t('home.text') }}</p>
      </div>
      <HomeSlider v-model="currentClient"/>
      <span class="text-sm font-light fixed bottom-8 right-8 font-mono">© 2025</span>
  </div>
</template>

<script setup lang="ts">
import HomeSlider from "@/components/organisms/HomeSlider.vue";
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";

const { t } = useI18n();

const colors = {
    'citadium': 'bg-emerald-100',
    'isabel-marant': 'bg-yellow-100',
    'jimmy-fairly': 'bg-sky-100',
    'lacoste': 'bg-green-100',
    'ami-paris': "bg-amber-50",
    'cabaia': "bg-cyan-100",
    'claudie-pierlot': "bg-orange-50",
    'g-star': "bg-sky-100",
    'hugo-boss': "bg-yellow-100",
    'lancaster': 'bg-pink-100',
    'leo-violette': "bg-yellow-100",
    'sandro': 'bg-orange-100',
    'the-kooples': 'bg-indigo-100',
    'isotoner': 'bg-red-100',
}

const currentClient = ref<null | string>(null);

definePageMeta({
  layout: 'default'
})

useSeoMeta({
    title: t('home.seo.title'),
    description: t('home.seo.description'),
})
</script>

<style scoped>
@keyframes anim1 {
    0% {order: 2}
    10% {order: 6}
    20% {order: 1}
    30% {order: 3}
    40% {order: 5}
    50% {order: 4}
    60% {order: 5}
    70% {order: 1}
}
@keyframes anim2 {
    0% {order: 2}
    10% {order: 1}
    20% {order: 6}
    30% {order: 2}
    40% {order: 5}
    50% {order: 4}
    60% {order: 1}
    70% {order: 4}
}
@keyframes anim3 {
    10% {order: 1}
    20% {order: 7}
    30% {order: 2}
    40% {order: 3}
    50% {order: 4}
    60% {order: 2}
    70% {order: 1}
}

.anim-text-job__letter:nth-of-type(odd) {
    animation: anim1 ease .7s;
}
.anim-text-job__letter:nth-of-type(even) {
    animation: anim2 ease .7s;
}
.anim-text-job__letter:nth-of-type(n+3) {
    animation: anim3 ease .7s;
}
</style>