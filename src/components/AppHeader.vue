<template>
  <header class="w-full fixed top-0 z-50 opacity-75 bg-black flex justify-between items-center sm:flex-row md:flex-row sm:justify-between md:justify-between">
    <AppLogo/>
    <div class="w-4/5 menu-items-wrapper flex justify-center items-center" v-show="$store.state.showMenu">
      <MenuItems />
    </div>
    <div class="w-48 flex flex-col justify-center items-center max-sm:hidden max-md:hidden max-lg:hidden">
      <span
          v-for="lang in $store.state.languages"
          :key="lang"
          class="cursor-pointer"
      >
        {{ lang }}
      </span>
    </div>
    <div class="xl:hidden lg:hidden">
      <AppToggleMobile/>
    </div>
  </header>
</template>

<script>
import MenuItems from './MenuItems.vue';
import AppLogo from "@/components/AppLogo.vue";
import AppToggleMobile from "@/components/AppToggleMobile.vue";

export default {
  components: {
    AppLogo,
    MenuItems,
    AppToggleMobile
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .md\:w-2\/5 {
    width: 40%;
  }

  .md\:w-28 {
    width: 7rem;
  }
}

@media (max-width: 1024px) {
  .menu-items-wrapper {
    display: none;
  }
}
</style>
