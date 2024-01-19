<template>
  <AppHeader/>
  <div class="mt-40">
    <router-view/>
  </div>
  <AppFooter/>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
