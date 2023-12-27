<template>
    <NuxtLink to="/shop/1">
        <div class="w-full h-[500px] shadow rounded-md overflow-hidden transform hover:scale-105">
            <div class="w-full h-[300px] bg-gray-primary p-4 flex justify-center items-center" >
                <div class="w-full h-full flex justify-center items-center" v-if="!product.cover">
                  sem imagem
                </div>
                <nuxt-img
                    :src="product.cover"
                    fit="cover"
                    class="w-full h-full"
                    v-else
                />
            </div>
            <div class="h-[200px] w-full px-4 flex flex-col justify-center py-2">
                <h4 class="font-semibold text-lg text-red-primary">{{ product.title }}</h4>
                <p class="text-xs">{{ product.brand }}</p>
                <div class="flex items-center mt-2 justify-between">
                    <span class="text-2xl font-bold text-red-primary">{{ transformToMoney(product.price) }}</span>
                    <button class="transform hover:scale-105">
                        <ShoppingCart :size="20" :color="'black'"/>
                    </button>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import Product from '@/models/Product';

const { product } = defineProps<{
    product: Product
}>()


function transformToMoney(value: number){
    console.log(value)
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


</script>