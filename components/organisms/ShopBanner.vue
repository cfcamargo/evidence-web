<template>
    <div class="w-full h-[calc(100vh_-_80px)]">
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
                        <div class="w-full h-[calc(100vh_-_80px)] flex items-center justify-center bg-gray-primary relative">
                            <nuxt-img
                                src="https://i0.wp.com/pachecos.com/wp-content/uploads/2022/11/Sala-de-Estar-Moderna-Logan-com-Movel-de-TV-e-Mesa-de-Centro-Pachecos-1.jpg?fit=2000%2C1500&ssl=1"
                                layout="fill"
                                class="xs:h-full md:h-auto xs:w-auto md:w-full object-cover"
                            />
                            <div class="absolute w-full h-full bg-black/80 flex items-center">
                                <Container class="flex flex-col xs:items-center md:items-start gap-8 xs:px-2 md:px-0">
                                    <h2 class="xs:text-2xl md:text-5xl text-white font-bold xs:text-center md:text-start">
                                        Móveis Únicos,<br/> Lares Inesquecíveis!
                                    </h2>
                                    <p class="text-white">Transforme seu espaço, viva o conforto!</p>

                                    <a class="px-8 py-3 flex gap-4 justify-center rounded w-[250px] bg-red-primary text-white hover:opacity-90 cursor-pointer">
                                        <WhatsappLogo />
                                        <span>
                                            Falar com vendedor
                                        </span>
                                    </a>
                                </Container>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    </div>
</template>

<script setup lang="ts">

</script>
