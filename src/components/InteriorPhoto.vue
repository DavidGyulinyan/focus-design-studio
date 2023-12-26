<template>
  <section class="w-full flex justify-center items-center">
    <div
        class="w-full mt-64 h-[900px] overflow-y-scroll no-scrollbar bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        :style="{ backgroundImage: 'url(' + image + ')' }">
    </div>
  </section>
</template>

<script>
import image from "../assets/testImagesFolder/11..jpg"

export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>
