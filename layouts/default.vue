<template>
    <div class="container">
        <HeaderComponent />
        <div class="container__body">
            <slot />
        </div>
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/layout/header/index.vue';
import FooterComponent from '@/components/layout/footer/index.vue';

</script>

<style>
@import '@/assets/scss/main.scss';
</style>