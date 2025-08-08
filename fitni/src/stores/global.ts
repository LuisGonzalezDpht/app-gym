import i18n from '@/i18n'
import type { lanTypes } from '@/lib/types/i18n.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore(
  'global',
  () => {
    const language = ref<lanTypes>('es')

    function changeLanguage() {
      if (language.value === 'es') {
        language.value = 'en'
        return
      }

      language.value = 'es'
      return
    }

    function getLanguage(key: string): string {
      const word = i18n(key, language.value)

      if (word) return word

      return 'x_x'
    }

    return { language, changeLanguage, getLanguage }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['language'],
    },
  },
)
