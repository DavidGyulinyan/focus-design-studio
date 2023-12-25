<template>
  <div class="w-full flex justify-center mt-32">
    <img
         :src="image"
         alt="interior photo"
         class="w-3/5 h-3/5"
    >
  </div>
</template>

<script>
import image from "../assets/testImagesFolder/109400833_144990773884210_8771481519331202718_n.jpg"

export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>
