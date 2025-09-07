<template>
    <div>
        <div v-if="client" class="px-6 min-h-screen pb-10">

            <div class="pt-[80px] md:pt-[100px] grid gap-16 w-full grid-cols-1 lg:grid-cols-[1fr_50%] md:grid-rows-[auto_1fr] relative">

                <div>
                    <h1 class="font-[Neutral] mb-6"
                        :class="{
                        'text-5xl md:text-6xl lg:text-7xl xl:text-8xl': client.title?.length < 15,
                        'text-4xl md:text-5xl lg:text-6xl xl:text-7xl': client.title?.length >= 15
                    }">
                        <AnimationLetterFromLeft :text="client.title"/>
                    </h1>
                    <AnimationWordFromBottom
                            v-if="client.keywords?.length"
                            class="gap-2 font-mono text-sm md:text-md flex-wrap gap-y-1 mb-8"
                            :words="client.keywords"
                    />
                    <div class="gap-1 md:gap-8 grid-rows-[auto] grid grid-cols-1 md:grid-cols-[25%_1fr]">
                        <h2 class="font-[Neutral] uppercase text-lg">{{ $t('client.client') }}</h2>
                        <div v-html="description" class="prose text-sm prose-strong:font-medium prose-ul:pl-3"></div>
                        <h2 class="font-[Neutral] uppercase text-lg mt-6 md:mt-0">{{ $t('client.mission') }}</h2>
                        <div>
                            <div v-html="mission" class="prose text-sm prose-strong:font-medium prose-ul:pl-3"></div>
                            <p v-if="info?.length" class="text-xs text-gray-400 mt-6 italic">{{ info }}</p>
                            <Button v-if="client.url" :to="client.url" icon="mdi:arrow-top-right" class="mt-6">
                                {{ $t('client.see_website') }}
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                        v-if="mockupFullImage"
                        class="lg:row-span-2 lg:col-start-2 flex justify-center"
                >
                    <ImageAnimated
                           class="w-full h-auto max-w-2xl"
                            :image="mockupFullImage"
                            :alt="client.title"
                    />
                </div>
                <div v-else class="pl-[5%] max-w-2xl mx-auto lg:max-w-full flex justify-center items-center">
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

                <div v-if="previousClient?.id || nextClient?.id" class="fixed z-[3] bottom-6 left-6 flex gap-2">
                    <ButtonClient :client="previousClient" :is-previous="true"/>
                    <ButtonClient :client="nextClient" :is-next="true"/>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import {watch} from "vue";
import AnimationLetterFromLeft from "@/components/animations/AnimationLetterFromLeft.vue";
import AnimationWordFromBottom from "@/components/animations/AnimationWordFromBottom.vue";
import ButtonClient from "@/components/ui/ButtonClient.vue";
import Button from "@/components/ui/Button.vue";
import ImageAnimated from "@/components/animations/ImageAnimated.vue";

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
const info = computed(() => getClientText('info'));
const mockupDesktop = computed(() => client.value?.mockups?.desktop);
const mockupTablet = computed(() => client.value?.mockups?.tablet);
const mockupMobile = computed(() => client.value?.mockups?.mobile);
const mockupSingleImage = computed(() => client.value?.mockups?.image);
const mockupFullImage = computed(() => client.value?.mockups?.full);

watch(client, (data) => {
    if (data) {
        const seoDescKey = `clients.${clientId.value}.seo.description`;
        
        // SEO Meta
        useSeoMeta({
            title: t('client.seo.title', {name: data.title}),
            description: te(seoDescKey) ? t(seoDescKey) : null
        })
        
        // Schema.org JSON-LD pour projet spécifique
        const { defineBreadcrumbList } = useSchemaOrgPersonal()
        const { defineProject } = useSchemaOrgProject({
          name: data.title,
          description: description.value || data.title,
          image: mockupFullImage.value || mockupSingleImage.value || mockupDesktop.value,
          url: data.url,
          technologies: data.keywords,
          dateCreated: data.year ? `${data.year}-01-01` : undefined
        })
        
        useSchemaOrg([
          defineBreadcrumbList(),
          defineProject()
        ])
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