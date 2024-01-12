<template>
  <section class="mt-28 flex flex-col items-center">
    <div class="swiper-container w-full">
      <swiper
          class="relative flex justify-start items-center"
          :direction="'vertical'"
          :modules="modules"
          :space-between="400"
          :loop="true"
          :pagination="{clickable: true}"
          :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true
    }"
          :effect="'fade'"
          :fadeEffect="{ crossFade: true }"
      >
        <div
            class="w-0 h-full bg-black opacity-70 absolute top-0 left-0 z-10 xl:hidden lg:hidden transition-all overflow-hidden"
            :class="{ 'w-1/2' : $store.state.isOpen } ">
          <AppMobileMenu/>
        </div>
        <swiper-slide
            v-for="item in swiperTextBase"
            :key="item.id"
            class="flex justify-center items-center"
        >
          <img class="w-full object-contain" :src="item.img" :alt="'slider images'">
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import AppMobileMenu from "@/components/AppMobileMenu.vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Pagination, EffectFade} from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';
import {ref} from 'vue'
import img1 from '../assets/testImagesFolder/7.jpg'
import img2 from '../assets/testImagesFolder/7...jpg'
import img3 from '../assets/testImagesFolder/7new.jpg'

export default {
  components: {Swiper, SwiperSlide, AppMobileMenu},
  props: {
    title: String,
    isActive: Boolean
  },

  setup() {
    const swiperTextBase = ref([
      {
        id: 1,
        img: img1
      },
      {
        id: 2,
        img: img2
      },
      {
        id: 3,
        img: img3
      },
    ])
    return {
      modules: [Pagination, Autoplay, EffectFade],
      swiperTextBase
    }
  }
}
</script>

<style>
.swiper-wrapper {
  height: 100vh;
}
</style>
