<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation -->
    <header class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-primary dark:text-white">
          MS
        </NuxtLink>
        
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="#home" class="nav-link">Home</NuxtLink>
          <NuxtLink to="#about" class="nav-link">About</NuxtLink>
          <NuxtLink to="#skills" class="nav-link">Skills</NuxtLink>
          <NuxtLink to="#projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="#contact" class="nav-link">Contact</NuxtLink>
        </nav>
        
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button 
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="toggleDarkMode"
            aria-label="Toggle dark mode"
          >
            <i 
              class="pi text-xl dark:text-gray-300" 
              :class="colorMode.value === 'dark' ? 'pi-sun' : 'pi-moon'"
            ></i>
          </button>
          
          <!-- Mobile menu button -->
          <button 
            class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            aria-label="Toggle menu"
          >
            <i class="pi pi-bars text-xl dark:text-gray-300"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen" 
        class="md:hidden bg-white dark:bg-gray-800 shadow-lg"
      >
        <div class="px-4 py-2 space-y-2">
          <NuxtLink 
            v-for="link in mobileMenuLinks" 
            :key="link.to"
            :to="link.to" 
            class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </header>
    
    <main class="pt-20">
      <NuxtPage />
    </main>
    
    <footer class="bg-gray-50 dark:bg-gray-800 py-8 mt-16">
      <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
        <p>© {{ new Date().getFullYear() }} Mahmoud Salah. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="#" class="social-icon">
            <i class="pi pi-github"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="pi pi-linkedin"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="pi pi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const colorMode = useColorMode();
const router = useRouter();
const isMobileMenuOpen = ref(false);

// Mobile menu links
const mobileMenuLinks = [
  { to: '#home', text: 'Home' },
  { to: '#about', text: 'About' },
  { to: '#skills', text: 'Skills' },
  { to: '#projects', text: 'Projects' },
  { to: '#contact', text: 'Contact' },
];

// Toggle dark mode
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// Add smooth scrolling for anchor links
onMounted(() => {
  // Set initial theme
  if (process.client) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      colorMode.preference = 'dark';
    }
    
    // Smooth scrolling for anchor links
    router.beforeEach((to, from, next) => {
      if (to.hash) {
        const element = document.querySelector(to.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      next();
    });
  }
});

// Close mobile menu when route changes
router.afterEach(() => {
  isMobileMenuOpen.value = false;
});
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200;
}

.social-icon {
  @apply w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-xl text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-200 shadow-sm;
}

.router-link-active {
  @apply text-primary font-semibold;
}

/* Smooth transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Smooth color transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
</style>
