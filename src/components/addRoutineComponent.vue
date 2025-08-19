<script lang="ts" setup>
import { Calendar1Icon, PlusIcon } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore()
</script>

<template>
  <div
    class="p-5 border bg-base-300 border-dotted w-full flex flex-col justify-center items-center rounded-xl gap-y-4 text-center"
  >
    <div class="space-y-4 w-full">
      <h4 class="flex justify-center items-center gap-2">
        <Calendar1Icon class="w-8" /> {{ global.getLanguage('routine_titulo') }}
      </h4>
      <p class="text-accent">{{ global.getLanguage('routine_subtitulo') }}</p>
      <Button class="w-full" as-child>
        <RouterLink to="/create/routine" class="flex gap-2 items-center">
          <PlusIcon /> {{ global.getLanguage('routine_button') }}
        </RouterLink>
      </Button>
    </div>
  </div>
</template>
