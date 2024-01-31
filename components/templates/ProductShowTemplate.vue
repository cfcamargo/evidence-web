<template>
    <Container class="py-40">
        <div class="grid gap-10 grid-cols-2" v-if="store.getLoading === false">
            <div class="px-10 shadow" v-if="product?.cover">
                <nuxt-img
                :src="product?.cover"
                layout="fill"
                class="w-[80%] mx-auto"
                />
            </div>

            <div v-else class="w-[80%] object-cover"> 
                <EmptyImage class="h-full w-full" />
            </div>

            <div class="w-full h-full py-2 flex flex-col gap-10">
                <div>
                    <h4 class="font-bold text-2xl text-red-primary leading-relaxed">{{ product?.title }}</h4>
                    <span>{{ product?.brand }}</span>
                </div>

                <div>
                    <p>{{ product?.description }}</p>
                </div>

                <span class="text-yellow-600 font-bold" v-if="product?.quantity === 0">
                    Produto fora de estoque
                </span>


                <div class="flex flex-col gap-4">
                    <span class="text-4xl font-bold text-red-primary" v-if="product">
                        {{ transformToMoney(product.price) }}
                    </span>

                    <button class="w-40 bg-red-primary flex justify-center items-center gap-2 py-2 rounded text-white filter hover:brightness-90">
                        <WhatsappLogo :width="20"/>
                        Comprar
                    </button>
                </div>
            </div>

        </div>
        <div v-if="!loading">
            <ProductsCardSlider :products="store.getRelationatedProducts" title="Produtos Relacionados" />
        </div>
    </Container>


</template>

<script setup lang="ts">
import Product from '@/models/Product';
import { useProductsStore } from '@/store/products'

const store = useProductsStore()

const props = defineProps<{
    product: Product | null
}>()

const { product } = props

function transformToMoney(value: number){
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const loading = ref(true)

async function loadRelationatedProducts(){
    const products: any = await $fetch(`${import.meta.env.VITE_API_URL}/products?category=${product?.category}`)
    store.setRelationatedProducts(products)
    loading.value = false
}

onMounted(async() => {
    await loadRelationatedProducts()
})

</script>
