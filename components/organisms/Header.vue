<template>
    <div class="font-mono fixed z-20 top-0 left-0 w-full text-white mix-blend-difference">
        <div class="px-6 flex items-center">
            <h1 class="font-[Neutral] uppercase text-md font-medium">
                <AnimationLetterFromLeft text="Maëva Pasteur"/>
            </h1>
            <nav class="ml-auto text-xs uppercase">
                <ul class="flex gap-6">
                    <li v-for="page in menu" class="py-4 flex items-center">
                        <NuxtLink
                            :to="localePath({name: page})"
                            class="hover:text-gray-500 transition-colors"
                            active-class="underline underline-offset-[5px]"
                        >
                            {{ $t(`header.${page}`) }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div v-if="false">
                <button class="border uppercase font-medium px-3 py-1" @click.prevent="setLocale(currentLocale === 'fr' ? 'en' : 'fr')">
                    <span v-if="currentLocale === 'fr'">EN</span>
                    <span v-else>FR</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const currentLocale = ref(locale.value)

const changeLocale = () => {
    setLocale(currentLocale.value)
}

const menu = ["index", "works", 'about', 'contact'];
</script>