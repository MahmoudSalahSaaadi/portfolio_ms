import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  
  // Register components globally
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Textarea', Textarea);
  
  // Provide toast service
  const toast = nuxtApp.vueApp.config.globalProperties.$toast;
  return {
    provide: {
      toast
    }
  };
});
