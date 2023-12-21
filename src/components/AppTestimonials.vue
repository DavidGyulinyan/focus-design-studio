<template>
  <section class="w-full h-full flex justify-center items-center mt-36 mb-36">
    <div class="w-4/5 h-3/5">
      <swiper
          class="cursor-pointer"
          :modules="modules"
          :slides-per-view="3"
          :space-between="50"
          :loop="true"
          :pagination="{
            clickable: true
            }"
          :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
    }"
      >
        <swiper-slide
            class="flex flex-col items-center justify-center gap-8"
            v-for="item in swiperTextBase"
            :key="item.id"
        >
          <img
              class="w-20 h-20 rounded-full"
              :src="item.img"
              alt="img"
          >
          <p class="text-2xl">
            {{ item.title }}
          </p>
          <p class="h-40 pb-5 overflow-y-scroll overflow-hidden no-scrollbar">
            {{ item.description }}
          </p>

        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperTextBase = ref([
      {
        id: 1,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg",
        title: 'Name Surname',
        description: "Lorem ipsum dolor 😊 sit amet, consectetur adipisicing elit. Enim molestiae nam nemo nesciunt odit pariatur quae quos? Aliquid architecto assumenda aut eos error est, facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit👍👍👍👍👍😍😍. Enim molestiae nam nemo nesciunt odit pariatur quae quos? Aliquid architecto assumenda aut eos error est, facere illo, neque obcaecati reprehenderit tempora?nam nemo nesciunt odit pariatur quae quos? Aliquid architecto assumenda aut eos error est, facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae nam nemo nesciunt odit pariatur quae quos? Aliquid architecto assumenda aut eos error est, facere illo, neque obcaecati reprehenderit tempora?"
      },
      {
        id: 2,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg",
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet 💖💖💖💖🥰🥰🥰, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
      {
        id: 3,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg",
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae nam nemo nesciunt odit pariatur, facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
      {
        id: 3,
        img: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg",
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,👌💕 consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
    ])
    return {
      modules: [Pagination, Autoplay],
      swiperTextBase
    };
  },
};
</script>
