<template>
  <div>
    <div class="flex justify-between items-center">
      <AppLogo/>
      <div class="flex items-center">
        <div
            class="w-16 h-6 text-xs"
            v-for="lang in $store.state.languages"
            :key="lang"
        >
          {{ lang }}
        </div>
      </div>

    </div>
    <ul class="w-full ">
      <li
          class="border-b hover:border-pink-600 uppercase hover:text-pink-600 transition-all h-20 flex justify-center items-center"
          v-for="item in $store.state.menuItems"
          :key="item"
      >
        {{ item.title}}
      </li>
    </ul>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import AppLogo from "@/components/AppLogo.vue";

export default defineComponent({
  components: {AppLogo},
})
</script>
