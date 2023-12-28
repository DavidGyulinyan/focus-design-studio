<template>
  <section class="w-full flex justify-center items-center mt-64 mb-36 gap-24">
    <div class="w-full flex-col flex justify-center items-center">
      <span class="text-5xl">Client about us</span>
      <div class="w-5/6 max-xl:w-full max-lg:w-full mt-40">
        <swiper
            class="mySwiper h-[400px]"
            :modules="modules"
            :slides-per-view="slidesPerView"
            :space-between="50"
            :loop="true"
            :pagination="{
            clickable: true
            }"
            :autoplay="{
      delay: 5000,
      pauseOnMouseEnter: true
    }"
        >
          <swiper-slide
              class="h-80 flex flex-col items-center justify-center gap-8"
              v-for="item in swiperTextBase"
              :key="item.id"
          >
            <img
                class="w-20 h-20 rounded-full"
                :src="item.img"
                alt="User Photo"
            >
            <p class="text-2xl">
              {{ item.title }}
            </p>
            <p class="w-7/8 max-md:w-4/5 max-lg:w-11/12 max-xl:w-full h-40 px-5 max-lg:px-0 overflow-hidden overflow-y-scroll no-scrollbar flex justify-center">
              {{ item.description }}
            </p>

          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import {ref, onMounted, onBeforeUnmount} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import img1 from '../assets/testImagesFolder/7new.jpg'
import img2 from '../assets/testImagesFolder/7new.jpg'
import img3 from '../assets/testImagesFolder/7new.jpg'
import img4 from '../assets/testImagesFolder/7new.jpg'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(
        window.innerWidth <= 650
            ? 1
            : window.innerWidth <= 900
                ? 1
                : window.innerWidth > 900
                    ? 2
                    : 0
    );

    const setSlidesPerView = () => {
      slidesPerView.value =
          window.innerWidth <= 650
              ? 1
              : window.innerWidth <= 900
                  ? 1
                  : window.innerWidth > 900
                      ? 2
                      : 0;
    };

    onMounted(() => {
      setSlidesPerView();
      window.addEventListener("resize", setSlidesPerView);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", setSlidesPerView);
    });

    const swiperTextBase = ref([
      {
        id: 1,
        img: img1,
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"
      },
      {
        id: 2,
        img: img2,
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
      {
        id: 3,
        img: img3,
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae nam nemo nesciunt odit pariatur, facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
      {
        id: 3,
        img: img4,
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
      {
        id: 4,
        img: img4,
        title: 'Name Surname',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  facere illo, neque obcaecati reprehenderit tempora?"

      },
    ])
    return {
      modules: [Pagination, Autoplay],
      swiperTextBase,
      slidesPerView,
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background-color: #FF178F;
}

.swiper-pagination-bullet-active {
  background-color: #FF178F;
}
</style>
