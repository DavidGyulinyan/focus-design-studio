<template>
  <header class="flex justify-between items-center sm:flex-row md:flex-row sm:justify-between md:justify-between">
    <AppLogo/>
    <div class="w-4/5 menu-items-wrapper flex justify-center items-center" v-show="$store.state.showMenu">
      <MenuItems v-for="item in $store.state.menuItems" :key="item.title" :title="item.title"
                 :is-active="$store.state.activeMenu === item.title"/>
    </div>
    <div class="w-20 h-14 flex flex-col justify-center items-start max-sm:hidden max-md:hidden max-lg:hidden">
      <span v-for="lang in $store.state.languages" :key="lang">{{ lang }}</span>
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
