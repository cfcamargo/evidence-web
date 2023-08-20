<template>
    <div class="flex gap-5">
        <button type="button" @click="selected = filter" class="text-red-primary" :class="filter === selected ? 'font-bold' : ''" v-for="filter in filters" :key="filter"> {{ filter }} </button>
    </div>
</template>

<script setup lang="ts">
const selected = ref('Todos os Produtos')


const filters = [
    'Todos os Produtos',
    'Quarto',
    'Cozinha',
    'Sala'
]


</script>
