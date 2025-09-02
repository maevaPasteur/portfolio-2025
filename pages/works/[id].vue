<template>
    <div>
        <div v-if="client" class="px-6 min-h-screen flex justify-between gap-12 w-full">
            <div class="grow pt-[100px] pb-6 ">
                <h1 class="font-[Neutral] text-9xl mb-6">
                    <AnimationLetterFromLeft :text="client.title"/>
                </h1>
                <AnimationWordFromBottom
                        v-if="client.keywords?.length"
                        class="gap-2 font-mono flex-wrap gap-y-1"
                        :words="client.keywords"
                />
                <p v-if="description" v-html="description" v-reveal class="mt-2 font-light text-sm max-w-xl"></p>
                <div v-if="highlights" class="mt-8">
                    <ul class="text-sm font-light" v-reveal-group>
                        <li
                                v-for="item in highlights.split('<br>')"
                                class="flex gap-2 items-center"
                        >
                            <span class="w-[30px] border-b border-black"></span>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
                <Button v-if="client.url" v-reveal :to="client.url" icon="mdi:arrow-top-right" class="mt-10">
                    {{ $t('client.see_website') }}
                </Button>
            </div>
            <div class="media-3-container w-[50%] shrink-0 flex items-center">
                <div class="flex flex-col relative gap-3 relative">

                    <NuxtImg
                            v-for="(image, i) in [mockupTablet, mockupDesktop, mockupMobile]"
                            :src="image"
                            :alt="client.title"
                            :custom="true"
                            v-slot="{ src, imgAttrs, isLoaded }"
                    >
                        <img
                                v-bind="imgAttrs"
                                :src="src"
                                class="h-auto transition-all duration-[1500ms] ease-[cubic-bezier(.19,1,.22,1)] opacity-0 translate-y-[50px]"
                                :class="{
                                'is-visible': isLoaded,
                                'relative z-0 w-full': i === 0,
                                'relative z-[1] ml-auto w-[70%] delay-100': i === 1,
                                'absolute z-[2] w-[35%] bottom-[10%] left-[-5%] delay-200': i === 2
                            }"
                        />
                    </NuxtImg>

                </div>
                <div v-if="previousClient?.id || nextClient?.id" class="fixed z-[2] bottom-6 left-6 flex gap-2">
                    <ButtonClient :client="previousClient" :is-previous="true"/>
                    <ButtonClient :client="nextClient" :is-next="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {watch} from "vue";
import AnimationLetterFromLeft from "@/components/atoms/AnimationLetterFromLeft.vue";
import AnimationWordFromBottom from "@/components/atoms/AnimationWordFromBottom.vue";
import ButtonClient from "@/components/atoms/ButtonClient.vue";
import Button from "@/components/atoms/Button.vue";

const route = useRoute();
const {t, te} = useI18n();
const { getClientById, getPrevNextClientsById } = useClientsStore();

const getClientText = (prop) => {
    const key = `clients.${clientId.value}.${prop}`;
    return te(key) ? t(key) : null;
}

const clientId = computed(() => route?.params?.id);
const client = computed(() => getClientById(clientId.value));
const prevNextClients = computed(() => getPrevNextClientsById(clientId.value));
const previousClient = computed(() => prevNextClients.value?.[0]);
const nextClient = computed(() => prevNextClients.value?.[1]);
const description = computed(() => getClientText('description'));
const highlights = computed(() => getClientText('highlights'));
const mockupDesktop = computed(() => client.value?.mockups?.desktop);
const mockupTablet = computed(() => client.value?.mockups?.tablet);
const mockupMobile = computed(() => client.value?.mockups?.mobile);

watch(client, (data) => {
    if (data) {
        const seoDescKey = `clients.${clientId.value}.seo.description`;
        useSeoMeta({
            title: t('client.seo.title', {name: data.title}),
            description: te(seoDescKey) ? t(seoDescKey) : null
        })
    }
}, {immediate: true, deep: true});

definePageMeta({
    layout: 'default'
})
</script>

<style scoped>
.media-3-container {
    max-width: calc(85vh - 100px);
}

.media-3-container img.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>