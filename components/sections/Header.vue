<template>
  <header
    class="font-mono fixed z-20 top-0 left-0 w-full text-white mix-blend-difference duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)]"
    :class="{
      'opacity-0 -translate-y-1': !isReady,
      'opacity-100 -translate-y-none': isReady
    }"
  >
    <div class="flex items-center pl-6 pr-3 min-h-12">
      <h1 v-if="isHome" class="font-[Neutral] uppercase text-md font-medium">
        <AnimationLetterFromLeft text="Maëva Pasteur" />
      </h1>
      <NuxtLink
        v-else
        :to="localePath({ name: 'index' })"
        class="font-[Neutral] uppercase text-md font-medium"
      >
        <AnimationLetterFromLeft text="Maëva Pasteur" />
      </NuxtLink>
      <button
        class="ml-auto md:hidden flex items-center justify-center text-2xl min-w-10 min-h-10"
        @click.prevent="isMenuOpened = true"
      >
        <Icon name="mdi:menu" />
      </button>
      <nav class="ml-auto hidden md:block text-xs uppercase">
        <ul class="flex">
          <li
            v-for="(page, i) in menu"
            :key="i"
            class="py-4 px-3 flex items-center"
          >
            <NuxtLink
              :to="localePath({ name: page })"
              class="hover:opacity-60 transition-opacity duration-200 ease"
              active-class="underline underline-offset-[5px]"
            >
              {{ $t(`header.${page}`) }}
            </NuxtLink>
          </li>
          <li
            class="flex items-center px-3 relative hover:opacity-60 transition-opacity duration-200 ease"
            @click.prevent="isLocalePopinOpened = true"
          >
            <Icon name="mdi:world-wide-web" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <LocalePopin v-model="isLocalePopinOpened" />
  <Menu v-model="isMenuOpened" :menu="menu" />
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from '@/components/animations/AnimationLetterFromLeft.vue'
import LocalePopin from '@/components/sections/LocalePopin.vue'
import Menu from '@/components/sections/Menu.vue'

const localePath = useLocalePath()
const route = useRoute()

const isLocalePopinOpened = ref(false)
const isMenuOpened = ref(false)
const isReady = ref(false)

const isHome = computed(() => route?.name?.includes('index___'))

const menu = ['index', 'works', 'about', 'contact']

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 300)
})
</script>
