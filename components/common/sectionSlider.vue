<script setup>
import Title from "./title.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isShowSlider: {
    type: Boolean,
    default: false,
  },
  slidesPerView: {
    type: [String, Number],
    default: "auto",
  },
  itemContent: {
    type: Array,
    default: () => [],
  },
  spaceBetween: {
    type: Number,
    default: 16,
  },
});

const swiperEl = ref(null);
</script>

<template>
  <div class="section_slider">
    <div class="section_slider__header">
      <Title v-if="props.title">
        {{ props.title }}
      </Title>
      <div class="slider__navigation" v-if="props.isShowSlider">
        <button @click="swiperEl.swiper.slidePrev()">
          <img src="/images/common/icon/icon_prev.png" alt="icon_prev" />
        </button>
        <button @click="swiperEl.swiper.slideNext()">
          <img src="/images/common/icon/icon_next.png" alt="icon_prev" />
        </button>
      </div>
    </div>
    <div class="section_slider__content">
      <template v-if="props.isShowSlider">
        <div class="section_slider__content--slider">
          <client-only>
            <swiper-container
              ref="swiperEl"
              :slidesPerView="props.slidesPerView"
              :spaceBetween="props.spaceBetween"
            >
              <swiper-slide
                v-for="(item, idx) in props.itemContent"
                :key="idx"
                :class="[{ 'slide-auto': slidesPerView === 'auto' }]"
              >
                <div class="item__slide">
                  <nuxt-link :to="item?.url"
                    ><img
                      :src="item?.img ?? ''"
                      :alt="item?.name ?? 'img-slide'"
                  /></nuxt-link>
                </div>
              </swiper-slide>
            </swiper-container>
          </client-only>
        </div>
      </template>
      <template v-else>
        <div class="section_slider__content--img">
          <div
            class="item__slide"
            v-for="(item, idx) in props.itemContent"
            :key="idx"
          >
            <nuxt-link :to="item?.url"
              ><img :src="item?.img ?? ''" :alt="item?.name ?? 'img-slide'"
            /></nuxt-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/common/sectionSlider.scss"></style>
