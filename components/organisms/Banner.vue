<template>
    <div class="w-full h-[calc(100vh_+_200px)] bg-gray-primary pt-[80px]">
        <Container>
            <div class="w-full h-ful">
                <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'creative'"
                    :autoplay="{
                        delay: 8000,
                        disableOnInteraction: true,
                    }"
                    :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['100%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                    }"
                >
                    <SwiperSlide>
                        <div class="w-full h-[calc(100vh_-_80px)] flex items-center justify-center bg-gray-primary">
                            <div class="grid grid-cols-2 w-full h-full justify-center items-center px-10">
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-8xl font-bold text-red-primary">Sofás e <br/>Colchões</h1>
                                    <p class="text-gray-950">Conforto sem igual, do descanso à decoração! Seja em colchões ou sofás,<br/> somos a referência que você procura!</p>
                                    <butoton class="px-8 py-2 bg-red-primary w-52 text-white rounded flex items-center justify-center hover:opacity-90">Comprar</butoton>
                                </div>

                                <img src="/images/sofa.png" alt="">
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">

</script>