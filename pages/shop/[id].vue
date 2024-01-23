<template>
    <AppLayout>
        <ProductShowTemplate :product="productData" v-if="store.getLoading === false"/>
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { useProductsStore } from '@/store/products'
import Product from '~/models/Product';

const store = useProductsStore()

const productData = ref<any | null>(null)

const route = useRoute()
const productID = route.params.id

async function getProduct(){
    const data =  await $fetch(`${import.meta.env.VITE_API_URL}/products/${productID}`)
    productData.value = data
    store.setLoading(false)
}

onMounted(async() => {
    store.setLoading(true)
    await getProduct()
})


</script>
