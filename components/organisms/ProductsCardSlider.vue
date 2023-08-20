<template>
    <Container>
        <div class="py-32 flex flex-col gap-20">
            <div class="mx-auto flex flex-col gap-2 items-center justify-center">
                <SectionTitle :text="props.title" />
            </div>
            <div class="w-full">
                <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :slides-per-view="4"
                    :loop="true"
                    :autoplay="{
                        delay: 8000,
                        disableOnInteraction: false,
                    }"
                    class="w-full"
                >
                    <SwiperSlide v-for="product in 10" :key="product">
                        <div class="w-[90%] mx-auto p-2">
                            <ProductCard />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Container>

</template>

<script setup lang="ts">
import Product from '@/models/Product'

const props = defineProps<{
    products: Product[],
    title : string
}>()

const { products } = props

onMounted(() => {
    console.log(products)
})

</script>
