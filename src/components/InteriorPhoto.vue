<template>
  <section class="w-full flex justify-center items-center">
    <div
        class="w-full mt-64 h-[1000px] overflow-y-scroll no-scrollbar bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        :style="{ backgroundImage: 'url(' + image + ')' }">
    </div>
  </section>
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
