<script lang="ts" setup>
import HeaderComponent from '@/components/headerComponent.vue'
</script>

<template>
  <main
    vaul-drawer-wrapper
    id="app"
    class="flex flex-col justify-start items-center w-full min-h-screen"
  >
    <HeaderComponent />
    <slot />
  </main>
</template>
