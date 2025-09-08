<template>
  <Transition>
    <section
      v-if="isOpened"
      class="fixed z-40 w-full h-full top-0 left-0 flex flex-col items-center justify-center p-6 bg-gray-900 text-white"
    >
      <button
        class="w-[50px] h-[50px] absolute top-0 right-0 flex items-center justify-center text-2xl "
        @click.prevent="close"
      >
        <Icon name="mdi:close"/>
      </button>
      <nav class="text-center text-3xl font-[Neutral] my-auto">
        <ul :key="locale" v-reveal-group @click.prevent="close">
          <li v-for="(page, i) in menu" :key="i">
            <NuxtLink :to="localePath({name: page})" class="py-3 block">
              <AnimationLetterFromLeft :text="$t(`header.${page}`)" class="justify-center"/>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div v-reveal class="p-2 bg-gray-800 rounded-full flex text-white text-sm font-mono">
        <button
          v-for="item in locales"
          :key="item.code"
          class="rounded-full px-3 py-2"
          :class="{'bg-white text-black': item.code === locale}"
          @click.prevent="setLocale(item.code)"
        >
          {{ item.name }}
        </button>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/animations/AnimationLetterFromLeft.vue";

const isOpened = defineModel<boolean>();
const localePath = useLocalePath();
const { locale, setLocale, locales } = useI18n();

defineProps<{
    menu?: string[];
}>();

const close = () => isOpened.value = false;
</script>
