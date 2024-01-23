<template>
    <div class="w-full bg-white" v-if="props.show">
       <Container>
        <div class="flex  gap-4 justify-center py-6 w-full    ">
            <button class="flex w-full gap-5 hover:font-bold hover-text-red-primary" v-for="category in props.categories" @click="filterbyProduct(category)">
               {{ category }}
            </button>
        </div>
        <div>
               
        </div>
       </Container>
    </div>
</template>



<script setup lang="ts">
import { useProductsStore } from '@/store/products'

const productStore = useProductsStore()

const props = defineProps<{
     categories:string[],
     show:boolean
}>()

async function filterbyProduct(product:string){
    productStore.setLoading(true)
    // productStore.setFilter(
    //     {
    //         type: 'product',
    //         value: product
    //     }
    // )

    const products: any = await $fetch(`${import.meta.env.VITE_API_URL}/products?product=${product}`)
    console.log(products)
    productStore.setProducts(products)
    productStore.setLoading(false)
}

</script>

