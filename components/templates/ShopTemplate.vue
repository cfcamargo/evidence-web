<template>
    <div class="w-full flex items-center justify-center py-10" v-if="productStore.getLoading">
        <Loading />
    </div>
    <ShopList :products="productsList" v-else/>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/store/products'

const productStore = useProductsStore()

async function loadProductsList(){
    productStore.setLoading(true)
    const products: any = await $fetch(`${import.meta.env.VITE_API_URL}/products`)
    console.log(products)
    productStore.setProducts(products)
    productStore.setLoading(false)
}


const productsList = computed(() => productStore.products.data)


onMounted(async() => {
    if(productStore.products){
        await loadProductsList()
    }
})

</script>