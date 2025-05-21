<script setup>
// Create 10 slides
const slides = ref(Array.from({ length: 9 }))
onMounted(() => {
})
</script>

<template>
  <ClientOnly>
    <swiper-container

    :pagination="{
      clickable: true,
    }"
    >
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
      >
        <nuxt-link to="/"><img src="/images/slider/item1.png" alt="img-slide"></nuxt-link>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="css" scoped>
swiper-slide {
  height: 28.125vw;
  min-height: 200px;
}
</style>