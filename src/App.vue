<template>
  <div>
    <AppNavigation/>
    <RouterView/>
  </div>
</template>

<script setup>
import {RouterView} from "vue-router";
import AppNavigation from "@/components/AppNavigation.vue";
</script>

<style lang="scss" scoped></style>
