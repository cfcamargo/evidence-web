<template>
    <NuxtLink :to="url">
        <div class="w-full h-[500px] shadow rounded-md overflow-hidden transform hover:scale-105">
            <div class="w-full h-[300px] bg-gray-primary flex justify-center items-center">
                <div class="w-full h-full max-h-[300px] overflow-hidden flex justify-center items-center"
                    v-if="!product.cover">
                    <EmptyImage class="h-full" />
                </div>
                <nuxt-img :src="product.cover" fit="cover" class="w-full h-full" v-else />
            </div>
            <div class="h-[200px] w-full px-4 flex flex-col justify-start    py-2">
                <h4 class="font-semibold text-sm text-center text-red-primary">{{ product.title }}</h4>
                <p class="text-xs text-center">{{ product.brand }}</p>
                <div class="flex flex-col items-center mt-2 justify-center">
                    <span class="text-3xl font-bold text-red-primary">{{ transformToMoney(product.price) }}</span>
                    <span>ou</span>
                    <span class="font-bold">{{ calculatePerMont(product.price) }}</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import Product from '@/models/Product';

const { product } = defineProps<{
    product: Product
}>()

const url = computed(() => {
    return '/shop/' + product.system_id
})


function transformToMoney(value: number) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function calculatePerMont(value: number) {
    const quota = value / 10
    const valueWithQuota = quota * 12

    return '10x de ' + (valueWithQuota / 10).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


</script>
