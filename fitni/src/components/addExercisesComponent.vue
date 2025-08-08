<script lang="ts" setup>
import { DumbbellIcon } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
</script>

<template>
  <div
    class="p-5 border bg-base-300 transition-colors duration-200 border-dotted w-full flex justify-center items-center rounded-xl gap-x-4 text-center"
  >
    <Button><DumbbellIcon class="w-8" /> Crear Ejercicios Personalizados</Button>
  </div>
</template>
