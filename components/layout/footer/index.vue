<script setup>
import { data } from "./footer.data";
</script>

<template>
  <div class="footer">
    <div class="footer__wrap">
      <div class="footer__content">
        <div class="footer__item" v-for="(item, index) in data" :key="index">
          <h3 class="footer__title">{{ item.title }}</h3>
          <ul class="footer__list">
            <li
              class="footer__list__item"
              v-for="(subItem, subIndex) in item.content"
              :key="subIndex"
            >
              <nuxt-link :to="subItem?.url"
                ><span v-if="subItem?.name">{{ subItem.name }}</span
                ><img v-else :src="subItem.icon" alt="icon"
              /></nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/layout/footer/_index.scss"></style>
