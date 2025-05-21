<script setup>
const slides = ref(Array.from({ length: 9 }));
onMounted(() => {});
</script>

<template>
  <ClientOnly>
    <swiper-container
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <nuxt-link to="/"
          ><img src="/images/slider/item1.png" alt="img-slide"
        /></nuxt-link>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="scss" scoped>
swiper-slide {
  height: 28.125vw;
  min-height: 200px;
}

swiper-container::part(bullet),
swiper-container::part(bullet-active) {
  width: 2.8rem;
  height: 0.4rem;
  border-radius: 2rem;
  background-color: $bg-primary;
  opacity: 1;
}

swiper-container::part(bullet-active) {
  background-color: $bg-active;
}
</style>
