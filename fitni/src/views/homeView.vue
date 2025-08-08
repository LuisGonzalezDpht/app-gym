<script setup lang="ts">
import AddExercisesComponent from '@/components/addExercisesComponent.vue'
import AddRoutineComponent from '@/components/addRoutineComponent.vue'
import { useGlobalStore } from '@/stores/global'

const global = useGlobalStore()
</script>

<template>
  <section>
    <div class="p-1 py-5 flex flex-col gap-y-3 justify-center items-center">
      <div class="text-center w-full space-y-3">
        <h1 class="tex-center">{{ global.getLanguage('home_titulo') }}</h1>
        <p class="text-center text-primary">{{ global.getLanguage('home_subtitulo') }}</p>
      </div>
      <div class="space-y-2 max-w-lg w-full"><AddRoutineComponent /><AddExercisesComponent /></div>
    </div>
  </section>
</template>
