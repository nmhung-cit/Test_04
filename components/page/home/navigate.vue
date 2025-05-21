<script setup>
const listItems = ref([
    {
        title: 'free to earn',
        icon: '/images/icon/cashback.png',
        link: '/',
    },
    {
        title: 'Ranking',
        icon: '/images/icon/Race.png    ',
        link: '/',
    },
    {
        title: 'VIdeo-NFT',
        icon: '/images/icon/live.png',
        link: '/',
    },
    {
        title: 'How to buy',
        icon: '/images/icon/racing.png',
        link: '/',
    },
    {
        title: 'New NFTS',
        icon: '/images/icon/livecasino.png',
        link: '/',
    },
    {
        title: 'Roadmaps',
        icon: '/images/icon/minigames.png',
        link: '/',
    },
]);
</script>

<template>
    <div class="navigate">
        <div class="navigate__wrapper">
            <ul class="navigate__list">
                <li class="navigate__item" v-for="(item, index) in listItems" :key="index">
                    <nuxt-link :to="item.link">
                        <div class="navigate__item__icon">
                            <img :src="item.icon" alt="cashback" />
                        </div>
                        <div class="navigate__item__title">{{ item.title }}</div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navigate {
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
    background-color: $bg-primary;
    display: flex;
    justify-content: center;
    align-items: center;

    &__wrapper {
        width: 100%;
        max-width: 120rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    &__list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                img {
                    width: 4.8rem;
                    height: 4.8rem;
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
</style>