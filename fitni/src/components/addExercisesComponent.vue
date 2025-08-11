<script lang="ts" setup>
import { BicepsFlexedIcon, DumbbellIcon } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore()
</script>

<template>
  <div
    class="p-5 border bg-base-300 transition-colors duration-200 border-dotted w-full flex justify-center items-center rounded-xl gap-x-4 text-center"
  >
    <div class="space-y-4 w-full">
      <h4 class="flex gap-2 justify-center items-center">
        <BicepsFlexedIcon class="w-8" />{{ global.getLanguage('exercises_titulo') }}
      </h4>
      <p class="text-accent">{{ global.getLanguage('exercises_subtitulo') }}</p>
      <Button class="w-full" as-child>
        <RouterLink to="/create/exercises" class="flex gap-2 items-center">
          <DumbbellIcon /> {{ global.getLanguage('exercises_button') }}
        </RouterLink>
      </Button>
    </div>
  </div>
</template>
