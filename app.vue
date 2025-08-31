<template>
  <div>
      <Cursor/>
      <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import Cursor from "@/components/atoms/Cursor.vue";
</script>
