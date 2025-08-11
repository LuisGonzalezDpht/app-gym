/**
 * interfaces y tipos
 */
import type I18nInterface from '@/lib/interfaces/i18n.interface'
import type { lanTypes } from '@/lib/types/i18n.type'

/**
 * archivos
 */
import home from '@/i18n/data/home.json'
import muscles from '@/i18n/data/muscles.json'
import routineComp from '@/i18n/data/routineComp.json'
import exercisesComp from '@/i18n/data/exercisesComp.json'

const dataMap: Record<string, I18nInterface> = {
  home,
  muscles,
  routineComp,
  exercisesComp,
}

export default function i18n(key: string, lan: lanTypes): string | null {
  for (const data of Object.values(dataMap)) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        return data[key].map((item) => item[lan])[0]
      }
      return data[key][lan]
    }
  }
  return null
}
