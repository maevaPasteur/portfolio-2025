<template>
  <div class="layout-default min-h-screen bg-white">
      <Header/>
      <main class="relative z-[0]">
          <slot />
      </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/organisms/Header.vue";
</script>