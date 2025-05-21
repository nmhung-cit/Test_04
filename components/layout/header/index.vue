<script setup>
import ButtonComponent from '@/components/common/button.vue';

const itemsMenu = ref([
    { name: 'Home', path: '/' },
    { name: 'Items1', path: '/item-1' },
    { name: 'Items2', path: '/item-2' },
    { name: 'Items3', path: '/item-3' },
    { name: 'Items4', path: '/item-4' },
    
]);

function handleSignUp() {
    // Handle sign up logic here
    console.log('Sign Up clicked');
}

function handleLogin() {
    // Handle login logic here
    console.log('Log In clicked');
}


</script>

<template>
    <div class="header">
        <div class="header__wrap">
            <div class="header__left">
                <div class="header__logo">
                    <nuxt-link to="/">
                        <img src="/images/logo/logo.svg" alt="Logo" />
                    </nuxt-link>
                </div>
                <div class="header__nav">
                    <ul>
                        <li v-for="(item, id) in itemsMenu" :key="id"><nuxt-link :to="item.path">{{ item.name }}</nuxt-link></li>
                    </ul>
                </div>
            </div>
            <div class="header__right">
                <div class="header__btn">
                    <ButtonComponent @on-click="handleSignUp">SIGN UP</ButtonComponent>
                    <ButtonComponent @on-click="handleLogin" type="secondary">LOG IN</ButtonComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" src="@/assets/scss/layout/header/_index.scss"></style>