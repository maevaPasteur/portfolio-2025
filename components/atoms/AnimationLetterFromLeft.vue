<template>
    <span
            v-if="words?.length"
            ref="el"
            class="parent flex flex-wrap"
            :class="{'is-visible': isVisible}"
    >
        <span v-for="(word, i) in words">

            <span class="whitespace-nowrap inline-flex">
               <span
                   v-for="(letter, y) in word"
                   class="block overflow-hidden letter-container"
                   :style="{'animation-delay': `${(i*100) + (y*30)}ms`}"
               >
                   <span
                           class="block letter"
                           :style="{'animation-delay': `${(i*100) + (y*30)}ms`}"
                   >
                       {{ letter }}
                   </span>
               </span>
            </span>

            <template v-if="i !== words?.length -1">&nbsp;</template>

        </span>
    </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const el = ref<HTMLElement|null>(null)
const isVisible = useElementVisibility(el)

const props = defineProps<{
    text: string
}>()

const words = computed(() => props.text?.split(' ') || []);
</script>

<style scoped>
@keyframes animLetter {
    0% {
        transform: translateX(0%);
    }
    40% {
        transform: translateX(-60%);
    }
    60% {
        transform: translateX(-60%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes animBorder {
    0% {
        border-color: rgba(0,0,0,0);
    }
    40% {
        border-color: rgba(0,0,0,1);
    }
    60% {
        border-color: rgba(0,0,0,1);
    }
    100% {
        border-color: rgba(0,0,0,0);
    }
}

.letter-container {
    border-left: solid 1px;
    border-color: rgba(0,0,0,0);
}

.parent.is-visible .letter {
    animation: animLetter cubic-bezier(0.86, 0, 0.07, 1) 1s;
}

.parent.is-visible .letter-container {
    animation: animBorder cubic-bezier(0.86, 0, 0.07, 1) 1s;
}
</style>