<template>
  <AppLayout>
    <Banner />
    <SearchCategory />
    <ProductsCardSlider :products="products" title="Itens mais buscados"/>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Product from 'models/Product';

const products: Product[] = [
  {
    brand : "",
    category : "",
    cover : "",
    description : "",
    id: 1,
    name : "",
    price : 0,
    quantity : 0,
    rating : 0,
    systemId : 1,
  }
]

</script>
