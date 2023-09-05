<template>
  <AppLayout>
    <Banner />
    <ProductsCardSlider :products="products" title="Itens mais buscados"/>
    <Container class="bg-gray-primary mb-20 pb-4">
      <div class="w-full flex bg-gray-primary p-4 rounded pb-10">
        <div class="w-1/3">
          <h3 class="text-5xl font-bold text-red-primary">Sofás para todos os gostos</h3>

          <div class="flex flex-col py-6">
            <span class="text-xs">A partir</span>
            <span class="text-3xl font-bold text-red-primary">R$699,90</span>
            <a href="" class="mt-2 bg-red-primary w-32 h-8 rounded flex items-center justify-center text-white filter hover:brightness-90">Comprar</a>
          </div>
        </div>
        <div class="flex-1">
          <nuxt-img
              src="/images/sofa-home-card.png"
              class="w-full -mt-16"
          />
        </div>
      </div>
      <p class="px-4 text-red-primary italic text-lg">Oferecemos uma ampla gama de sofás para todos os gostos e estilos. De designs descolados a opções mais sofisticadas, temos o modelo perfeito esperando por você.</p>
    </Container>
    <ShopList :total-per-page="12"/>
    <HomeContactForm class="mt-40"/>
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
