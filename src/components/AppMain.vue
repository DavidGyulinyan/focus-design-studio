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
import AppHeader from "@/components/AppHeader.vue";
import SliderAppSection from "@/components/SliderAppSection.vue";
import ProjectTypeSection from "@/components/ProjectTypeSection.vue";
import InteriorPhoto from "@/components/InteriorPhoto.vue";
import AppTestimonials from "@/components/AppTestimonials.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppAboutUsHome from "@/components/AppAboutUsHome.vue";
</script>
