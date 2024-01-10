<template>
  <section class="w-full flex flex-col justify-center items-center mt-[170px]">
    <span class="text-5xl uppercase">Projects</span>
    <div class="w-full flex justify-center items-center mt-40">
      <div class="w-full flex max-lg:flex-col justify-around items-center cursor-pointer gap-14">
        <div
            v-for="item of projectTypes"
            :key="item.id"
            class="group w-full max-sm:w-full max-md:w-5/6 max-lg:w-11/12 h-full flex flex-col justify-center items-start gap-8 relative"
        >
          <div
              class="w-full h-14 absolute bottom-0 left-0 z-10 text-pink-600 text-4xl bg-black opacity-70 pl-5 group-hover:text-white transition-all max-max-md:text-3xl flex items-center">
            {{ item.title }}
          </div>
          <img
              class="grayscale w-full h-full object-cover group-hover:grayscale-0 transition-all"
              :src="item.image"
              :alt="item.alt"
              style="max-width: 100%;"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import img from "../assets/testImagesFolder/12.jpg"
import img1 from "../assets/testImagesFolder/22..jpg"

export default {
  setup() {
    const projectTypes = ref([
      {
        id: 2,
        title: 'Interior Design',
        image: img,
        alt: "Interior photo"
      },
      {
        id: 2,
        title: 'Architecture',
        image: img1,
        alt: "Architecture photo"
      },
    ])
    return {projectTypes}
  }
}
</script>
