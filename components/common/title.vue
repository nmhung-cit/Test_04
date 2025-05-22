<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
});
</script>

<template>
    <h3 class="title">
        <slot />
    </h3>
</template>

<style scoped lang="scss" src="@/assets/scss/common/title.scss"></style>