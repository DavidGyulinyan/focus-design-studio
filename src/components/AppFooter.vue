<template>
  <footer class="w-full flex max-sm:flex-col max-md:flex-col justify-center max-sm:items-center max-md:items-center my-20 max-sm:gap-20 max-md:gap-20">
    <div
        class="w-1/3 max-sm:w-full max-md:w-11/12 max-md:pl-1 flex flex-col justify-center items-center max-sm:items-center max-md:items-center max-lg:items-center gap-5">
      <div class="w-3/5 max-sm:w-11/12 max-xl:w-2/3 max-lg:w-11/12 max-md:text-1xl max-sm:py-8 flex flex-col items-end max-sm:items-center gap-5 max-sm:gap-5 max-sm:gap-3">
        <span class="w-11/12 text-3xl max-md:text-lg max-lg:text-2xl text-end max-md:text-center mb-5">Contact US</span>
        <div class="w-11/12 text-sm text-end max-md:text-center">Tel: +374 93259364</div>
        <div class="w-11/12 max-lg:w-full text-sm text-end max-md:text-center">Email: focus.designstudio20@gmail.com</div>
        <div class="w-11/12 text-sm text-end max-md:text-center">Address: Gai avenue 8/2</div>
      </div>
    </div>

    <div class="w-1/3 max-sm:w-full flex justify-center max-sm:justify-start items-center">
      <AppLogo class="w-full flex justify-center"/>
    </div>

    <div
        class="w-1/3 max-sm:w-1/2 max-sm:w-full max-md:w-11/12 max-md:pl-1 flex flex-col justify-center items-center max-md:items-center max-lg:items-start ml-4">
      <div class="w-1/2 max-sm:w-1/2 max-md:w-1/2 max-lg:w-2/3 max-md:text-1xl max-sm:py-8 flex flex-col max-sm:items-center max-md:items-center max-lg:items-start gap-5 max-sm:gap-6">
        <span class="text-3xl max-md:text-lg max-lg:text-2xl mb-5 max-sm:mb-10 max-md:mb-6">Follow US</span>
        <div
            v-for="item in logoIcons"
            :key="item.id"
            class="w-3/4 max-sm:w-4/5 flex justify-between items-center"
        >
          {{ item.title }}

          <div class="w-2/4 flex justify-center items-center">
            <img
                :src="item.icon"
                :alt="item.title"
                class="w-[25px] h-[25px] border-0"
                style="filter: brightness(0) invert(1);"
            >
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>
<script>
import AppLogo from "@/components/AppLogo.vue";
import instagramLogo from '../assets/icons/instagram.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import linkedinLogo from '../assets/icons/linkedin.svg'
import {ref} from "vue";

export default {
  components: {
    AppLogo,
  },
  setup() {
    const logoIcons = ref([
      {
        id: 1,
        title: 'Instagram',
        icon: instagramLogo
      },
      {
        id: 2,
        title: 'Facebook',
        icon: facebookIcon
      },
      {
        id: 3,
        title: 'Linkedin',
        icon: linkedinLogo
      },
    ])
    return {logoIcons}
  }
}
</script>
