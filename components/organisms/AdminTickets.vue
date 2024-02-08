<template>
    <div class="flex flex-col">
        <div class="py-2">
            <h2 class="font-bold text-2xl text-red-primary">Emissão de Etiquetas</h2>
            <form class="w-full flex items-center gap-4 mt-4" @submit.prevent="getProducts">
                <q-input filled label="Pesquise por um produto" v-model="searchTerm" :dense="false" class="flex-1" />
                <q-btn round color="primary" icon="search" type="submit" />
            </form>
        </div>

        <div class="flex">
            <div class="w-full">
                <div class="py-4">
                    <h4 class="font-bold text-xl text-red-primary">Produtos</h4>
                </div>
                <div class="space-y-2">
                    <div class="flex gap-4  items-center w-full border bg-stone-100/80 p-4 rounded"
                        v-if="productList.length > 0" v-for="product in productList" :key="product.id">
                        <div class="flex justify-between flex-1 gap-4">
                            <div class="flex flex-col">
                                <span class="font:bold text-xl overflow-ellipsis">{{ product.title }}</span>
                                <span class="text-xs">Fabricante : {{ product.brand }}</span>
                                <span class="text-xs">Categoria : {{ product.category }}</span>
                            </div>

                            <div class="flex flex-col items-end">
                                <span class="font-bold">Preço:</span>
                                <span class="font-bold text-xl text-red-primary">{{ transformToMoney(product.price)
                                }}</span>
                            </div>
                        </div>
                        <div class="pl-4">
                            <q-btn round color="red-primary" icon="add" @click="addProductToTicketsList(product)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="py-10">
                <q-pagination v-model="current" :max="productStore.products.meta.last_page" :max-pages="6" ellipses
                    direction-links unelevated color="gray-primary" text-color="red-primary" active-color="red-primary"
                    active-text-color="white" @update:model-value="changePage($event)" />
            </div>
        </div>
    </div>
    <ProductTicketModal :product="productForm.product" @closeAddProductToTicketsModal="closeAddProductToTicketsModal"
        v-if="productForm.show" />
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import Product from '~/models/Product';

import { useProductsStore } from '@/store/products';

const productStore = useProductsStore()
const searchTerm = ref('')

const productForm = ref<{
    product: Product | null,
    show: boolean
}>({
    product: null,
    show: false
})

const current = ref(1)

function changePage(page: number) {
    current.value = page
}

const getProducts = () => {
    if (searchTerm.value.length > 3) {
        console.log('filtrei')
    }
}

const productList = computed((): Product[] => {
    return productStore.products.data
})


const addProductToTicketsList = (product: Product) => {
    productForm.value.product = product
    productForm.value.show = true
}

const closeAddProductToTicketsModal = () => {
    productForm.value.show = false
    productForm.value.product = null
}

const transformToMoney = (value: number) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

</script>
