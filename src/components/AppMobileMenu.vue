<template>
  <div class="h-full flex">
    <ul class="w-full h-full flex flex-col justify-center">
      <div class="flex justify-end items-start">
        <div
            class="w-16 h-10 text-xs"
            v-for="lang in $store.state.languages"
            :key="lang"
        >
          {{ lang }}
        </div>
      </div>
      <RouterLink
        v-for="rout in routes"
        :to="{name: rout.name}"
        :key="rout.name"
      >
        <li
          class="hover:border-pink-600 uppercase hover:text-pink-600 transition-all h-20 flex justify-center items-center"
        >
          {{ rout.name}}
        </li>
      </RouterLink>
    </ul>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
</script>
