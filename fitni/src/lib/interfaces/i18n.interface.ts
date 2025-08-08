export default interface I18nInterface {
  [key: string]: Basic | Basic[]
}

interface Basic {
  en: string
  es: string
}
