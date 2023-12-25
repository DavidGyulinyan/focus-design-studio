<template>
  <section class="w-full flex justify-center items-center mt-64">
    <div class="w-5/6 flex justify-center items-center">
      <div class="w-6/8 max-md:w-6/8 h-1/2 flex max-lg:flex-col justify-around items-center cursor-pointer gap-14">
        <div
            v-for="item of projectTypes"
            :key="item.id"
            class="group w-3/5 max-sm:w-full max-md:w-5/6 max-lg:w-11/12 h-full flex flex-col justify-center items-start gap-8">
        <span class="lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-xl font-light cursor-pointer group-hover:text-pink-600 transition-all">
          {{ item.title }}
        </span>
          <img
              class="grayscale w-full h-80 object-cover group-hover:grayscale-0 transition-all"
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

export default {
  setup() {
    const projectTypes = ref([
      {
        id: 2,
        title: 'Interior Design',
        image: "https://media.architecturaldigest.com/photos/560468847da26e3235ad8eba/16:9/w_2560%2Cc_limit/intern-set-design-02.jpg",
        alt: "Interior photo"
      },
      {
        id: 1,
        title: 'Architecture',
        image: "https://www.build-review.com/wp-content/uploads/2023/02/Minimalist.jpeg",
        alt: "Architecture photo"
      },
    ])
    return {projectTypes}
  }
}
</script>
