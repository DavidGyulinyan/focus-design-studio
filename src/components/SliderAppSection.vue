<template>
  <section class="flex flex-col items-center">
    <div class="mt-8 mb-4 text-3xl text-center">
      <span>Focus Design Studio</span>
    </div>
    <div class="swiper-container w-full">
      <swiper
          :modules="modules"
          :space-between="20"
          :loop="true"
          :pagination="{clickable: true}"
          :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
      >
        <swiper-slide
            v-for="item in swiperTextBase"
            :key="item.id"
            class="flex justify-center items-center"
        >
          <img class="w-full" :src="item.img" :alt="'slider images'">
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
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay, Pagination} from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from 'vue'

export default {
  components: {Swiper, SwiperSlide},
  props: {
    title: String,
    isActive: Boolean,
  },

  setup() {
    const swiperTextBase = ref([
      {
        id: 1,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg"
      },
      {
        id: 2,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg"
      },
      {
        id: 3,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg",
      },
    ])
    return {modules: [Pagination, Autoplay], swiperTextBase}
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .swiper-container {
    max-width: 940px;
    margin: 0 auto;
  }
}
</style>
