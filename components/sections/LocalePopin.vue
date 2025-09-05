<template>
    <div
            class="fixed z-40 left-0 top-0 w-full h-full flex justify-end transition-ease duration-500 bg-gray-800/30"
            :class="{'opacity-100': isOpened, 'opacity-0 pointer-events-none': !isOpened}"
    >
        <div
                class="bg-white px-12 py-16 w-full max-w-lg relative transition-ease duration-500"
                :class="{'translate-x-[50%]': !isOpened}"
                @mouseleave="isOpened = false"
        >
            <button
                    @click.prevent="isOpened = false"
                    class="w-[40px] h-[40px] absolute top-0 right-0 flex items-center justify-center text-2xl hover:opacity-60 transition-opacity duration-200 ease"
            >
                <Icon name="mdi:close"/>
            </button>
            <p class="text-sm mb-8 font-mono">{{ $t('header.locale.title') }}</p>
            <div class="flex flex-col w-max">
                <button
                        v-for="item in locales"
                        class="text-4xl flex items-center gap-6 py-2 hover:text-gray-600 transition-ease duration-200"
                        @click.prevent="setLocale(item.code)"
                >
                    <Icon
                            name="mdi:arrow-right"
                            class="transition-ease duration-300"
                            :class="{'opacity-0': locale !== item.code}"
                    />
                    <span>{{ item.name }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const isOpened = defineModel();
const { locale, setLocale, locales } = useI18n()
</script>