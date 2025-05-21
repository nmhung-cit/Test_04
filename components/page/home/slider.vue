<script setup>
const slides = ref(Array.from({ length: 9 }));
onMounted(() => {});
</script>

<template>
  <ClientOnly>
    <swiper-container

      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <div class="item__slide">
            <nuxt-link to="/"
          ><img src="/images/slider/item1.png" alt="img-slide"
        /></nuxt-link>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="scss" scoped>
swiper-slide {
display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 28.125vw;
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
.item__slide{
    width: 100%;
    a{
        display: inline-block;
        width: 100%;

        > img{
            width: 100%;
            // height: 100%;
            margin-bottom: -100px;
        }
    }
}
</style>
