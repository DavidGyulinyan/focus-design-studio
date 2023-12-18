<template>
  <div class="text-white">
    <div
        class="w-0 h-full bg-black absolute z-10 xl:hidden lg:hidden transition-all overflow-hidden"
        :class="{ 'w-3/4' : $store.state.isOpen }">
      <AppMobileMenu/>
    </div>
    <AppHeader/>
    <SliderAppSection/>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import SliderAppSection from "@/components/SliderAppSection.vue";
import AppMobileMenu from "@/components/AppMobileMenu.vue";
</script>
