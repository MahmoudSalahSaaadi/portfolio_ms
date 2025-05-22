import { useI18n } from 'vue-i18n';

export const useI18nHelpers = () => {
  const { locale, locales } = useI18n();
  
  // Available languages
  const availableLocales = computed(() => {
    return (locales.value as Array<{ code: string; name: string; dir: string }>).map(locale => ({
      code: locale.code,
      name: locale.name,
      dir: locale.dir
    }));
  });

  // Current language
  const currentLocale = computed(() => {
    return availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0];
  });

  // Switch language
  const switchLanguage = (langCode: string) => {
    const newLocale = availableLocales.value.find(locale => locale.code === langCode);
    if (newLocale) {
      locale.value = newLocale.code;
      document.documentElement.lang = newLocale.code;
      document.documentElement.dir = newLocale.dir;
      
      // Update meta tags
      if (process.client) {
        document.title = document.title.replace(
          new RegExp(`(${availableLocales.value.map(l => l.name).join('|')}) - `, 'g'),
          ''
        );
        
        if (newLocale.code === 'ar') {
          document.title = `الملف الشخصي - ${document.title}`;
        } else {
          document.title = `Portfolio - ${document.title}`;
        }
      }
    }
  };

  // Format date based on current locale
  const formatDate = (date: Date | string, options: Intl.DateTimeFormatOptions = {}) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options
    }).format(dateObj);
  };

  // Format number based on current locale
  const formatNumber = (number: number, options: Intl.NumberFormatOptions = {}) => {
    return new Intl.NumberFormat(locale.value, options).format(number);
  };

  return {
    availableLocales,
    currentLocale,
    switchLanguage,
    formatDate,
    formatNumber
  };
};
