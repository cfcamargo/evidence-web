<template>
    <AppLayout>
        <ProductShowTemplate />
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
const route = useRoute()
const productID = route.params.id




</script>
