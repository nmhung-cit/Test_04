<script setup>
const slides = ref(Array.from({ length: 9 }));
onMounted(() => { });
</script>

<template>
    <client-only>
        <swiper-container :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
    }">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <div class="item__slide">
                <nuxt-link to="/"><img src="/images/slider/item1.png" alt="img-slide" /></nuxt-link>
            </div>
        </swiper-slide>
    </swiper-container>
    </client-only>
</template>

<style scoped lang="scss" src="@/assets/scss/page/home/slider.scss"></style>
