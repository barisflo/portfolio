export type Language = 'en' | 'kr'

export const useLanguage = () => {
  // Use localStorage instead of cookies for better SSR support
  const language = useState<Language>('language', () => 'en')

  const setLanguage = (lang: Language) => {
    language.value = lang
    if (import.meta.client) {
      localStorage.setItem('preferred-language', lang)
    }
  }

  const initializeLanguage = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('preferred-language') as Language
      if (stored && ['en', 'kr'].includes(stored)) {
        language.value = stored
      }
    }
  }

  return {
    language: readonly(language),
    setLanguage,
    initializeLanguage
  }
}
