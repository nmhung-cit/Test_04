<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
});
const emits = defineEmits(['onClick']);

function handleClick(event) {
    event.preventDefault();

    if (!props.isDisabled) {
        emits('onClick', event);
    }
}
</script>

<template>
    <div class="button">
        <button class="button__btn" :class="[props.type]" @click="handleClick" :disabled="props.isLoading || props.isDisabled">
            <slot />
            <div class="button__loading" v-if="props.isLoading">loading...</div>
        </button>
    </div>
</template>

<style scoped lang="scss" src="@/assets/scss/common/button.scss"></style>
