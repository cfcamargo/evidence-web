<template>
    <NuxtLink to="/shop/1">
        <div class="w-full h-[400px] shadow rounded-md">
            <div class="w-full h-[300px] bg-gray-primary p-4 flex justify-center items-center">
                <img src="/images/poltrona.png" alt="" class="object-cover w-[80%]">
            </div>
            <div class="h-[100px] w-full px-4 flex flex-col justify-center py-2">
                <h4 class="font-semibold text-lg text-red-primary">Poltrona do papai</h4>
                <p class="text-xs">Marca</p>
                <div class="flex items-center mt-2 justify-between">
                    <span class="text-2xl font-bold text-red-primary">R$699,90</span>
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
import Product from 'models/Product';

// const { product } = defineProps<{
//     product: Product
// }>()


</script>