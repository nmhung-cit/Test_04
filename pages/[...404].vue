<template>
    <h1>Not found page: {{ route.params?.["404"][0] }}</h1>
</template>
  
<script setup>
const route = useRoute()
</script>
<style lang="scss" scoped>
h1 {
    color: $color-title;
    font-size: 50px;
    text-align: center;
    margin: 100px 0;
}
</style>