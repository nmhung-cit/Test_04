<script setup>
import SlideComponent from '@/components/page/home/slider.vue';
import navigate from '@/components/page/home/navigate.vue';
import sectionSlider from '@/components/common/sectionSlider.vue';

const itemContentNew = reactive([
    {
        img: '/images/page/home/new0.png',
        url: '/item0',
        name: 'item0',
    },
    {
        img: '/images/page/home/new1.png',
        url: '/item1',
        name: 'item1',
    },
    {
        img: '/images/page/home/new2.png',
        url: '/item2',
        name: 'item2',
    },
    {
        img: '/images/page/home/new3.png',
        url: '/item3',
        name: 'item3',
    },
    {
        img: '/images/page/home/new4.png',
        url: '/item4',
        name: 'item4',
    },
    {
        img: '/images/page/home/new5.png',
        url: '/item5',
        name: 'item5',
    },
]);
const itemNtfDrops = reactive([
    {
        img: '/images/page/home/nft1.png',
        url: '/item1',
        name: 'item1',
    },
    {
        img: '/images/page/home/nft1.png',
        url: '/item2',
        name: 'item2',
    },
])

const itemNtfHot = reactive([
    {
        img: '/images/page/home/nft2.png',
        url: '/item1',
        name: 'item1',
    },
])

const itemNtfPromotion = reactive([
    {
        img: '/images/page/home/nft3.png',
        url: '/item1',
        name: 'item1',
    },
])

const isMobile = ref(false)

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile)
})

</script>

<template>
    <div class="home">
        <SlideComponent />
        <navigate />
        <div class="home__wrapper">
            <div class="home__content">
                <div class="home__selection_new">
                    <sectionSlider title="New NFT Collections" :is-show-slider="true" :item-content="itemContentNew" :spaceBetween="isMobile ? 3 : 16" />
                </div>
                <div class="home__selection_ntf">
                    <div class="home__selection_ntf--drops">
                        <sectionSlider title="NFT Drops Calendar" :is-show-slider="true" :item-content="itemNtfDrops" :slidesPerView="1" />
                    </div>
                    <div class="home__selection_ntf--item">
                        <div class="ntf_item hot">
                            <sectionSlider title="HOT NFT" :is-show-slider="false" :item-content="itemNtfHot" />
                        </div>
                        <div class="ntf_item promotion">
                            <sectionSlider title="PROMOTION" :is-show-slider="false" :item-content="itemNtfPromotion" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" src="@/assets/scss/page/home/index.scss"></style>