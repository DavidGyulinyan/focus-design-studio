<template>
  <main class="text-white relative">
    <AppHeader/>
    <SliderAppSection/>
    <AppAboutUsHome/>
    <InteriorPhoto/>
    <ProjectTypeSection/>
    <AppTestimonials/>
    <AppFooter/>
  </main>
</template>
<script setup>
import SliderAppSection from '@/components/SliderAppSection.vue'
import AppTestimonials from '@/components/AppTestimonials.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import ProjectTypeSection from '@/components/ProjectTypeSection.vue'
import AppAboutUsHome from '@/components/AppAboutUsHome.vue'
import InteriorPhoto from '@/components/InteriorPhoto.vue'
</script>