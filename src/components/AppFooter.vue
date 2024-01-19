<template>
  <footer
      class="w-full text-white flex justify-center max-md:flex-col-reverse max-sm:flex-col-reverse max-sm:items-center max-md:items-center mt-64 mb-16 max-sm:gap-20 max-md:gap-40">
    <div
        class="w-1/2 max-sm:w-full max-md:w-full flex flex-col justify-center items-center max-sm:items-center max-md:items-center max-lg:items-center gap-5">
      <div
          class="w-3/5 max-sm:w-11/12 max-xl:w-2/3 max-lg:w-full max-md:text-1xl max-sm:py-8 md:pl-20 lg:pl-10 flex flex-col items-center max-lg:items-start max-sm:items-center gap-5 max-sm:gap-5 max-sm:gap-3">
        <span class="w-11/12 max-md:w-full text-3xl max-md:text-lg max-lg:text-2xl text-start max-md:text-center mb-5">Contact US</span>
        <div class="w-11/12 max-md:w-full max-sm:text-[10px] text-start max-md:text-center">Tel: +374 93259364</div>
        <div class="w-11/12 max-md:w-full max-lg:w-full max-sm:text-[10px] text-start max-md:text-center">Email:
          focus.designstudio20@gmail.com
        </div>
        <div class="w-11/12 max-md:w-full max-sm:text-[10px] text-start max-md:text-center">Address: Gai avenue 8/2</div>
      </div>
    </div>

    <div
        class="w-1/2 max-sm:w-full max-md:w-11/12 max-md:pl-1 flex flex-col  items-center ml-4">
      <div
          class="w-3/6 max-sm:w-1/2 max-md:w-1/2 max-lg:w-2/3 max-md:text-1xl max-sm:py-8 flex flex-col justify-around items-center gap-20 max-md:gap-10 max-sm:gap-6">
        <span class="text-3xl max-md:text-lg max-lg:text-2xl max-sm:mb-10 max-md:mb-6">Follow US</span>
        <div class="w-1/2 max-sm:w-5/6 flex justify-around">
          <div
              v-for="item in logoIcons"
              :key="item.id"
          >
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
import instagramLogo from '../assets/icons/instagram.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import linkedinLogo from '../assets/icons/linkedin.svg'
import {ref} from "vue";

export default {
  setup() {
    const logoIcons = ref([
      {
        id: 1,
        title: "Instagram",
        icon: instagramLogo
      },
      {
        id: 2,
        title: "Facebook",
        icon: facebookIcon
      },
      {
        id: 3,
        title: "Linkedin",
        icon: linkedinLogo
      },
    ])
    return {logoIcons}
  }
}
</script>
