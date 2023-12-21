<template>
  <div class="w-full flex justify-center mt-32">
    <img
         :src="image"
         alt="interior photo"
         class="w-1/2"
    >
  </div>
</template>

<script>
import image from "../assets/testImagesFolder/323352287_5936254923063030_4971183037352376912_n.jpg"

export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>
