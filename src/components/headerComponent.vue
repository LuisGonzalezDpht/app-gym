<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const onHome = computed(() => route.fullPath === '/')
</script>

<template>
  <header
    :class="{ 'animation-header-down': !onHome, 'animation-header-up': onHome }"
    class="w-full bg-base-100 p-2 flex justify-center items-center"
  >
    <div>
      {{ onHome }}
    </div>
  </header>
</template>

<style scoped>
.animation-header-up {
  opacity: 0;
  display: none;
}

.animation-header-down {
  animation: headerAnimationDown 200ms ease-in-out forwards;
}

@keyframes headerAnimationDown {
  from {
    transform: translateY(-10rem);
  }
  to {
    transform: translateY(0);
  }
}
</style>
