<template>
  <ul
    v-if="words?.length"
    ref="el"
    class="parent flex"
    :class="{'is-visible': isVisible}"
  >

    <li v-for="(word, i) in words" :key="i" class="block overflow-hidden word-container">
      <span
        class="block word"
        :style="{'animation-delay': `${i*30}ms`}"
      >
        {{ word }}
      </span>
    </li>

  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(el)

defineProps<{
    words: string[],
}>()
</script>

<style scoped>
@keyframes animWord {
    from {
        transform: translateY(15px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.word {
    transform: translateY(15px);
    opacity: 0;
}

.parent.is-visible .word {
    animation: animWord cubic-bezier(0.86, 0, 0.07, 1) 1s forwards;
}
</style>
