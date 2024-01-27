<template>
    <div class="flex justify-between">
        <div>
            <Sidebar />
        </div>
        <div class="w-full max-w-[1200px] mx-auto">
            <AdminProducts v-if="adminStore.component === 'products'" :loading="loading" @getProductsByPage="getProducts($event)"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductsData from '~/models/ProductsData';
import { useAdminStore } from '~/store/admin';
import { useProductsStore } from '~/store/products';

const adminStore = useAdminStore();
const productStore = useProductsStore();

const loading = ref(true)

async function getProducts(page?:number) {
    let url:string = page ?`${import.meta.env.VITE_API_URL}/products?page=${page}`:`${import.meta.env.VITE_API_URL}/products`
    loading.value = true
    const products: ProductsData  = await $fetch(url)
    productStore.setProducts(products)
    loading.value = false
}

onMounted(async() => {
    await getProducts()
})



</script>
