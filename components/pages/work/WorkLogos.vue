<template>
  <section class="w-full overflow-hidden">
    <Vue3Marquee
      v-for="(row, i) in logoRows"
      :key="i"
      class="flex mb-2"
      :clone="true"
      :direction="i === 1 || i === 3 ? 'normal' : 'reverse'"
      :duration="40"
    >
      <div
        v-for="logo in row"
        :key="logo"
        class="shrink-0 w-[80px] h-[50px] md:w-32 md:h-20 bg-gray-100  flex items-center justify-center mr-2"
      >
        <img
          :src="`/images/logos/${logo}.svg`"
          :alt="logo"
          class="w-14 h-7 md:w-20 md:h-10 object-contain grayscale hover:grayscale-0 duration-200 ease"
          loading="lazy"
        />
      </div>
    </Vue3Marquee >
  </section>
</template>

<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'

const logos = [
    "airbus", "ami", "balzac", "bandit", "bash", "bellerose", "bonpoint", "butagaz",
    "carel", "citadium", "claudie-pierlot", "cosmoparis", "dada-sport",
    "editions-didier", "epycure", "essentiel", "groupe-soufflet", "gstar", "heimstone",
    "hugo-boss", "iro", "isabel-marant", "isotoner", "jerome-dreyfuss", "jimmy-fairly",
    "jott", "kids-around", "lacoste", "lancaster", "leo-et-violette", "leo-pharma",
    "maison123", "cabaia", "petites-jupes-de-prune", "sandro", "tara-jarmon", "temperley",
    "the-kooples", "theater-in-paris", "vanessa-bruno", "victoria-beckham"
]

const chunkArray = <T, >(array: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
}

const logoRows = chunkArray(logos, Math.ceil(logos.length / 4))
</script>
