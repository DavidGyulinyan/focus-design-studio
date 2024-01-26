<template>
  <main class="text-white relative">
    <SliderAppSection/>
    <AppAboutUsHome/>
    <InteriorPhoto/>
    <ProjectsView/>
    <AppTestimonials/>
  </main>
</template>
<script setup>
import SliderAppSection from '@/components/SliderAppSection.vue'
import AppTestimonials from '@/components/AppTestimonials.vue'
import AppAboutUsHome from '@/components/AppAboutUsHome.vue'
import InteriorPhoto from '@/components/InteriorPhoto.vue'
import ProjectsView from '@/views/ProjectsView.vue'
</script>