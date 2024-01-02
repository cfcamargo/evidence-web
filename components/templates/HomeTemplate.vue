<template>
  <AppLayout>
    <Banner />
    <!-- <ProductsCardSlider :products="productsList" title="Itens mais buscados"/> -->
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
    <ShopList :total-per-page="12" :products="productsList" @getProductsByPage="getProducts($event)"/>
    <HomeContactForm class="mt-40"/>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Product from '@/models/Product';
import { useProductsStore } from '@/store/products'

const productStore = useProductsStore()

const loading = ref(true)

async function getProducts(page?:number) {
  let url:string = page ?`${import.meta.env.VITE_API_URL}/products?page=${page}`:`${import.meta.env.VITE_API_URL}/products`
  productStore.setLoading(true)
  const products: any  = await $fetch(url)
  productStore.setProducts(products)
  productStore.setLoading(false)
}

const productsList = computed(() => productStore.products.data)

onMounted(async() => {
  await getProducts()
})




</script>
