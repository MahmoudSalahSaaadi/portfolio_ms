<template>
  <div id="home" class="min-h-screen flex items-center">
    <div class="container mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Hero Text -->
        <div class="md:w-1/2 mb-12 md:mb-0">
          <p class="text-primary text-lg mb-2">Hi there! I'm</p>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Mahmoud <span class="text-primary">Salah</span>
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            I build exceptional digital experiences with modern web technologies and a focus on user-centered design.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="#contact"
              class="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center">
              <span>Get In Touch</span>
              <i class="pi pi-arrow-right ml-2"></i>
            </NuxtLink>
            <a href="#"
              class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center">
              <span>Download CV</span>
              <i class="pi pi-download ml-2"></i>
            </a>
          </div>

          <div class="mt-12">
            <p class="text-gray-500 dark:text-gray-400 mb-4">TECH STACK</p>
            <div class="flex flex-wrap gap-4">
              <div v-for="(tech, index) in techStack" :key="index" class="tech-icon">
                <i :class="tech.icon" class="text-3xl"></i>
                <span class="text-xs mt-1">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div
              class="w-64 h-64 md:w-80 md:h-80 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
              <div
                class="w-56 h-56 md:w-72 md:h-72 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center">
                <div
                  class="w-48 h-48 md:w-64 md:h-64 bg-primary/30 dark:bg-primary/40 rounded-full overflow-hidden border-4 border-white/20">
                  <!-- Replace with your image -->
                  <img src="/public/324785929_392866637069010_4682094920705440973_n.jpg" alt="" srcset="">
                  <div class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <i class="pi pi-user text-6xl text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span class="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div id="about" class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-semibold mb-6">Who am I?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
            I love turning ideas into reality through clean, efficient, and scalable code.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-8">
            With experience in modern JavaScript frameworks and a keen eye for design,
            I create applications that are not only functional but also provide an exceptional user experience.
          </p>

          <div class="grid grid-cols-2 gap-4 mb-8">
            <div v-for="(detail, index) in aboutDetails" :key="index" class="flex items-start">
              <i class="pi mr-2 mt-1 text-primary" :class="detail.icon"></i>
              <div>
                <h4 class="font-medium">{{ detail.label }}</h4>
                <p class="text-gray-500 dark:text-gray-400 text-sm">{{ detail.value }}</p>
              </div>
            </div>
          </div>

          <NuxtLink to="#contact" class="inline-flex items-center text-primary font-medium hover:underline">
            Contact Me
            <i class="pi pi-arrow-right ml-2"></i>
          </NuxtLink>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-semibold mb-6">My Skills</h3>
          <div class="space-y-6">
            <div v-for="(skill, index) in skills" :key="index">
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium">{{ skill.name }}</span>
                <span class="text-sm text-gray-500">{{ skill.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" :style="{ width: skill.percentage + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Projects Section -->
  <div id="projects" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <i class="pi pi-image text-5xl text-gray-400"></i>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex"
                class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
            <div class="flex space-x-4">
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
                class="text-primary hover:underline flex items-center text-sm">
                <i class="pi pi-external-link mr-1"></i>
                Live Demo
              </a>
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                class="text-gray-600 dark:text-gray-300 hover:underline flex items-center text-sm">
                <i class="pi pi-github mr-1"></i>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div id="contact" class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-8"></div>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out and let's create something amazing together!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div class="space-y-6">
            <div v-for="(contact, index) in contactInfo" :key="index" class="flex items-start">
              <div
                class="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <i class="pi text-primary" :class="contact.icon"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200">{{ contact.label }}</h4>
                <a :href="contact.href" class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                  :target="contact.isExternal ? '_blank' : ''">
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank"
                class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors shadow-sm">
                <i class="pi" :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form @submit.prevent="sendMessage" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your
                  Name</label>
                <InputText id="name" v-model="form.name" type="text" class="w-full" placeholder="John Doe" required />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email
                  Address</label>
                <InputText id="email" v-model="form.email" type="email" class="w-full" placeholder="john@example.com"
                  required />
              </div>
            </div>
            <div>
              <label for="subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <InputText id="subject" v-model="form.subject" type="text" class="w-full"
                placeholder="How can I help you?" required />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your
                Message</label>
              <Textarea id="message" v-model="form.message" rows="5" class="w-full"
                placeholder="Hi there, I'd like to talk about..." required></Textarea>
            </div>
            <Button type="submit" label="Send Message" class="w-full bg-primary hover:bg-primary/90 transition-colors"
              :loading="isSending" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

// Tech stack data
const techStack = [
  { name: 'Vue.js', icon: 'pi pi-vue' },
  { name: 'Nuxt.js', icon: 'pi pi-code' },
  { name: 'React', icon: 'pi pi-code' },
  { name: 'Node.js', icon: 'pi pi-server' },
  { name: 'Tailwind', icon: 'pi pi-palette' },
  { name: 'MongoDB', icon: 'pi pi-database' },
  { name: 'Git', icon: 'pi pi-github' },
  { name: 'Docker', icon: 'pi pi-box' }
];

// About details
const aboutDetails = [
  { label: 'Name', value: 'Mahmoud Salah', icon: 'pi-user' },
  { label: 'Email', value: 'mahmoud@example.com', icon: 'pi-envelope' },
  { label: 'Experience', value: '5+ Years', icon: 'pi-briefcase' },
  { label: 'Location', value: 'Cairo, Egypt', icon: 'pi-map-marker' },
];

// Skills
const skills = [
  { name: 'JavaScript/TypeScript', percentage: 90 },
  { name: 'Vue.js/Nuxt.js', percentage: 85 },
  { name: 'React/Next.js', percentage: 80 },
  { name: 'Node.js/Express', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 90 },
  { name: 'UI/UX Design', percentage: 75 },
];

// Projects data
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'project1.jpg',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    image: 'project2.jpg',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Nuxt.js and Tailwind CSS.',
    tags: ['Nuxt.js', 'Tailwind CSS', 'Vue 3'],
    image: 'project3.jpg',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Recipe Finder',
    description: 'Find recipes based on ingredients you have at home.',
    tags: ['React', 'Spoonacular API', 'Context API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user authentication and rich text editing.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

// Contact information
const contactInfo = [
  {
    label: 'Email',
    value: 'hello@mahmoudsalah.com',
    icon: 'pi-envelope',
    href: 'mailto:hello@mahmoudsalah.com',
    isExternal: true
  },
  {
    label: 'Phone',
    value: '+20 123 456 7890',
    icon: 'pi-phone',
    href: 'tel:+201234567890',
    isExternal: true
  },
  {
    label: 'Location',
    value: 'Cairo, Egypt',
    icon: 'pi-map-marker',
    href: 'https://maps.google.com',
    isExternal: true
  },
  {
    label: 'Freelance',
    value: 'Available',
    icon: 'pi-check-circle',
    href: '#contact',
    isExternal: false
  }
];

// Social links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'pi-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'pi-linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'pi-twitter' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'pi-dribbble' },
  { name: 'Behance', url: 'https://behance.net', icon: 'pi-behance' },
];

// Contact form
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSending = ref(false);

const sendMessage = () => {
  isSending.value = true;

  // Simulate API call
  setTimeout(() => {
    toast.add({
      severity: 'success',
      summary: 'Message Sent',
      detail: 'Thank you for reaching out! I will get back to you soon.',
      life: 5000
    });

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    isSending.value = false;
  }, 1500);
};
</script>

<style scoped>
.tech-icon {
  @apply flex flex-col items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow;
}

.tech-icon i {
  @apply text-2xl text-gray-700 dark:text-gray-300;
}

.tech-icon span {
  @apply text-xs text-gray-500 dark:text-gray-400 mt-1;
}

/* Animations */
#home {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scroll for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
