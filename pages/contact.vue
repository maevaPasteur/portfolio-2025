<template>
    <section class="min-h-screen w-full bg-gray-100 flex flex-col items-center">
        <div class="text-center my-auto px-6 text-gray-900">
            <h1 class="font-bold text-4xl mb-4">
                <span>{{ $t('contact.title') }}</span>
            </h1>
            <a class="font-[Neutral] text-6xl" href="mailto:maeva.pasteur.pro@gmail.com" target="_blank">
                <AnimationLetterFromLeft :text="email"/>
            </a>
        </div>
        <div class="bg-gray-900 w-full text-white px-6 py-6 flex gap-4 items-center justify-between">
            <div class="flex gap-4 items-center">
                <p class="text-sm font-mono">Follow me :</p>
                <div class="flex gap-1 items-center text-2xl">
                    <a
                            v-for="link in links"
                            :href="link.url"
                            target="_blank"
                            class="p-2 block"
                    >
                        <Icon :name="link.icon" />
                    </a>
                </div>
            </div>
            <p class="font-mono text-xs">© 2025 Maëva Pasteur</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";

const { t } = useI18n();

const email = "maeva.pasteur.pro@gmail.com";
const links = [
    {
        url: 'https://www.linkedin.com/in/maeva-pasteur',
        icon: 'mdi:linkedin'
    },
    {
        url: 'https://github.com/maevaPasteur',
        icon: 'mdi:github'
    }
]

definePageMeta({
    layout: 'default'
})

useSeoMeta({
    title: t('contact.seo.title'),
    description: t('contact.seo.description'),
})
</script>