<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Cursor v-if="isDesktop"/>
  </div>
</template>

<script setup lang="ts">
import Cursor from "@/components/ui/Cursor.vue";
import { ref, onMounted } from 'vue'

const isDesktop = ref(false)

onMounted(() => {
  isDesktop.value = window.matchMedia('(min-width: 1024px)').matches
})
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
