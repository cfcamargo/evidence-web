<template>
    <Container>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2 justify-center items-center py-20">
                <SectionTitle :text="'Nossos Produtos'" />
            </div>

            <div class="sticky top-[80px] left-0 right-0 py-8">
                menu aqui
            </div>

            <div class="w-full grid grid-cols-4 gap-4">
                <div v-for="product in 20" :key="product">
                    <ProductCard />
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">

</script>