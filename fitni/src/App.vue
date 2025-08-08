<script setup lang="ts">
import { Toaster } from './components/ui/sonner'
import LayoutDefault from './layout/layoutDefault.vue'
import 'vue-sonner/style.css'
</script>

<template>
  <Toaster />
  <LayoutDefault>
    <RouterView />
  </LayoutDefault>
</template>

<style scoped></style>
