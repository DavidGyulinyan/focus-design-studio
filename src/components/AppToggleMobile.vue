<template>
  <div class="w-20 h-10">
    <div
        class="w-10 h-10 flex flex-col justify-around cursor-pointer"
        @click="$store.commit('toggleMenu')"
    >
      <div class="w-10 border transition-all" :class="{ 'absolute rotate-45': $store.state.isOpen }"></div>
      <div class="w-10 border transition-all" :class="{ 'hidden': $store.state.isOpen }"></div>
      <div class="w-10 border transition-all" :class="{ 'absolute -rotate-45': $store.state.isOpen }"></div>
    </div>
  </div>
</template>
