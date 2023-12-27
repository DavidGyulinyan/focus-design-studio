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
      delay: 7000,
      pauseOnMouseEnter: true
    }"
          :effect="'fade'"
          :fadeEffect="{ crossFade: true }"
      >
        <div
            class="w-0 h-full bg-black opacity-70 absolute top-0 left-0 z-10 xl:hidden lg:hidden transition-all overflow-hidden"
            :class="{ 'w-1/2' : $store.state.isOpen }">
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
    <a
        class="flex justify-center items-center h-80"
        href="/"
    >
      <button
          class="w-56 h-10 max-sm:w-32 max-sm:h-10 max-md:w-40 text-lg max-sm:text-sm max-md:text-lg border rounded-sm hover:border-pink-600 transition-all duration-300">
        ABOUT US
      </button>
    </a>

    <div class="text-base md:text-lg lg:text-xl flex justify-center">
      <p class="w-2/4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed eros quis nisl vehicula ornare nec in
        eros. Nam semper dolor mauris, ac volutpat arcu tempus id. Sed sagittis erat eget sapien vehicula, ac eleifend
        nisl congue.
      </p>
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
    isActive: Boolean,
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
  height: 950px;
}
</style>
