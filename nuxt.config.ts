// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Basic configuration
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  
  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },
  
  // Auto-import components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // CSS
  css: [
    'primeicons/primeicons.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.min.css',
    '@/assets/css/main.css'
  ],

  // Build Configuration
  build: {
    transpile: ['primevue']
  },
  
  // PrimeVue Configuration
  primevue: {
    options: {
      ripple: true
    },
    components: {
      prefix: 'Prime'
    }
  },

  // App Configuration
  app: {
    head: {
      titleTemplate: '%s - Mahmoud Salah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Personal portfolio of Mahmoud Salah - Full Stack Developer',
          hid: 'description' 
        },
        { 
          name: 'og:description', 
          content: 'Personal portfolio of Mahmoud Salah - Full Stack Developer',
          hid: 'og:description' 
        },
        { 
          name: 'og:title', 
          content: 'Mahmoud Salah - Portfolio',
          hid: 'og:title' 
        },
        { 
          name: 'og:type', 
          content: 'website',
          hid: 'og:type' 
        },
        { 
          name: 'og:url', 
          content: process.env.BASE_URL || 'http://localhost:3000',
          hid: 'og:url' 
        },
        { 
          name: 'og:image', 
          content: '/og-image.jpg',
          hid: 'og:image' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap',
          crossorigin: ''
        }
      ],
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  // Runtime config
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  }
})
