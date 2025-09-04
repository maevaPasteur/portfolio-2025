<template>
    <div>
        <div v-if="client" class="px-6 min-h-screen pb-10">

            <div class="pt-[100px] grid gap-9 w-full grid-cols-[1fr_50%] grid-rows-[auto_1fr]">

                <div>
                    <h1 class="font-[Neutral] mb-6" :class="{'text-8xl': client.title?.length < 15, 'text-7xl': client.title?.length >= 15}">
                        <AnimationLetterFromLeft :text="client.title"/>
                    </h1>
                    <AnimationWordFromBottom
                            v-if="client.keywords?.length"
                            class="gap-2 font-mono flex-wrap gap-y-1"
                            :words="client.keywords"
                    />
                </div>

                <div class="row-span-2 col-start-2 flex justify-center items-center">
                    <div class="media-container flex items-center">
                        <ImageAnimated v-if="mockupSingleImage" :image="mockupSingleImage" :alt="client.title"/>
                        <div v-else-if="mockupMobile && mockupTablet && mockupDesktop" class="flex flex-col relative gap-3 relative">
                            <ImageAnimated
                                    v-for="(image, i) in [mockupTablet, mockupDesktop, mockupMobile]"
                                    :alt="client.title"
                                    :image="image"
                                    :img-class="i === 0 ? 'h-auto relative z-0 w-full' : i === 1 ? 'h-auto relative z-[1] ml-auto w-[70%] delay-100' : 'h-auto absolute z-[2] w-[35%] bottom-[10%] left-[-5%] delay-200'"
                            />
                        </div>
                    </div>
                </div>

                <div class="w-full grid grid-cols-[25%_1fr] pr-[5vw] gap-4" v-reveal-group>
                    <h2 class="font-[Neutral] uppercase text-lg">Client</h2>
                    <div v-html="description" class="prose text-sm prose-strong:font-medium prose-ul:pl-3"></div>
                    <h2 class="font-[Neutral] uppercase text-lg">Mission</h2>
                    <div>
                        <div v-html="mission" class="prose text-sm prose-strong:font-medium prose-ul:pl-3"></div>
                        <Button v-if="client.url" :to="client.url" icon="mdi:arrow-top-right" class="mt-6">
                            {{ $t('client.see_website') }}
                        </Button>
                    </div>
                    <div v-if="previousClient?.id || nextClient?.id" class="fixed z-[3] bottom-6 left-6 flex gap-2">
                        <ButtonClient :client="previousClient" :is-previous="true"/>
                        <ButtonClient :client="nextClient" :is-next="true"/>
                    </div>
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
import ImageAnimated from "@/components/atoms/ImageAnimated.vue";

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
const mission = computed(() => getClientText('mission'));
const mockupDesktop = computed(() => client.value?.mockups?.desktop);
const mockupTablet = computed(() => client.value?.mockups?.tablet);
const mockupMobile = computed(() => client.value?.mockups?.mobile);
const mockupSingleImage = computed(() => client.value?.mockups?.image);

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
.media-container {
    max-width: calc(85vh - 100px);
}
</style>