<template>
    <section class="mx-2 sm:px-6 flex flex-col gap-3 md:mt-10">
        <div
            v-for="competence in ['front', 'back', 'strategy']"
             class="w-full block md:grid grid-cols-12 gap-3 mt-6 md:mt-0"
        >
            <h2 class="pl-4 sm:pl-0 text-xl mb-2 font-[Neutral] col-span-12 md:col-span-3 lg:col-span-4" v-reveal>{{ $t(`about.competences.${competence}.title`) }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-3 grow flex-grow col-span-12 md:col-span-9 lg:col-span-8" v-reveal-group>
                <template v-for="i in 3">
                    <div
                            v-if="$te(`about.competences.${competence}.paragraphs.${i}.title`)"
                            class="bg-gray-50 p-4 rounded-lg"
                    >
                        <h3 class="font-semibold mb-1 text-gray-900 text-md md:text-lg">{{ $t(`about.competences.${competence}.paragraphs.${i}.title`) }}</h3>
                        <p class="text-sm text-gray-700" v-html="$t(`about.competences.${competence}.paragraphs.${i}.text`)"></p>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>