<template>
  <section class="w-full flex flex-col justify-center items-center mt-[9rem]">
    <span class="text-5xl uppercase">Projects</span>
    <div class="w-full flex justify-center items-center mt-40">
      <div class="w-full flex max-lg:flex-col justify-around items-center gap-14">
        <router-link
          class="w-full flex max-sm:justify-center max-md:justify-center max-lg:justify-center"
          v-for="item of combineData"
          :key="item.id"
          :to="item.route"
        >
          <div
            class="group w-full max-sm:w-full max-md:w-5/6 max-lg:w-11/12 h-full flex flex-col justify-center items-start gap-8 relative">
            <img
              class="grayscale w-full h-full object-cover group-hover:grayscale-0 transition-all"
              :src="item.image"
              :alt="item.alt"
            >
            <div
              class="w-full h-14 absolute bottom-0 left-0 z-10 text-pink-600 text-4xl bg-black opacity-70 pl-5 group-hover:text-white transition-all max-max-md:text-3xl flex items-center">
              {{ item.title }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import img from '../assets/testImagesFolder/12.jpg'
import img1 from '../assets/testImagesFolder/22..jpg'
import { pagesRoutes } from '@/router/pagesRoutes.js'

export default {
  setup() {
    const projectTypes = ref([
      {
        id: 1,
        title: 'Interior Design',
        image: img,
        alt: 'Interior photo'
      },
      {
        id: 2,
        title: 'Exterior Design',
        image: img1,
        alt: 'Exterior photo'
      }
    ])

    const combineData = ref([])

    combineData.value = projectTypes.value.map((item, index) => {
      if (index === 0) {
        return {
          id: item.id,
          title: item.title,
          image: item.image,
          alt: item.alt,
          route: `${pagesRoutes[0].path}/${pagesRoutes[0].children[0].path}`
        }
      } else if (index === 1) {
        return {
          id: item.id,
          title: item.title,
          image: item.image,
          alt: item.alt,
          route: `${pagesRoutes[0].path}/${pagesRoutes[0].children[1].path}`
        }
      } else {
        return {
          id: item.id,
          title: item.title,
          image: item.image,
          alt: item.alt,
          route: pagesRoutes[index].path
        }
      }
    })

    return { combineData }
  }
}
</script>
