<script lang="ts" setup>
import { Calendar1Icon } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore()
</script>

<template>
  <div
    class="p-5 border bg-base-300 border-dotted w-full flex flex-col justify-center items-center rounded-xl gap-y-4 text-center"
  >
    <div><Calendar1Icon class="w-8" /></div>
    <div class="space-y-4">
      <h4>{{ global.getLanguage('routine_titulo') }}</h4>
      <p class="text-accent">{{ global.getLanguage('routine_subtitulo') }}</p>
      <Button class="w-full"> {{ global.getLanguage('routine_button') }} </Button>
    </div>
  </div>
</template>
