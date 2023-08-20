<template>
        <div class="flex flex-col gap-2">
            <Container>
                <div class="flex flex-col gap-2 justify-center items-center py-20">
                    <SectionTitle :text="'Nossos Produtos'" />
                </div>
            </Container>

            <div class="sticky top-[80px] left-0 right-0 pt-8 pb-2 bg-white z-30">
                <Container class="flex justify-between">
                    <SimpleFilter />
                    <Filter />
                </Container>
            </div>

            <Container>
                <div class="flex flex-col gap-4 justify-center items-center">
                    <div class="w-full grid grid-cols-4 gap-8">
                        <div v-for="product in 20" :key="product">
                            <ProductCard />
                        </div>
                    </div>
                    <div class="py-10">
                        <q-pagination
                            v-model="current"
                            :max="100"
                            :max-pages="6"
                            ellipses
                            direction-links
                            unelevated
                            color="gray-primary"
                            text-color="red-primary"
                            active-color="red-primary"
                            active-text-color="white"
                            @update:model-value="changePage($event)"
                        />
                    </div>
                </div>
            </Container>
        </div>
</template>

<script setup lang="ts">
const current = ref(1)

function changePage(page: number){
    console.log(page)
    current.value = page
}


</script>