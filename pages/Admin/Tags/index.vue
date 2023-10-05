<template>
  <AdminLayout>
    <div class="w-full flex justify-between items-center py-2">
      <Breadcrumb :routes="['Admin', 'Etiquetas']"/>
      <button class="relative" @click="toogleTagsList">
        <Tag />
        <span class="rounded-full text-xs bg-red-primary text-white absolute -bottom-1 -right-2 w-5 h-5 flex items-center justify-center">
          {{ tagsList.length }}
        </span>
      </button>
    </div>

    <div class="mt-4 flex flex-col gap-8">
      <form class="w-full border rounded border-gray-400 group flex gap-2 px-2">
        <input type="text" placeholder="Pesquise um produto" class="bg-transparent px-2 py-2 flex-1 outline-none group:focus:border-red-primary">
        <button type="submit" class="">
          <Search size="20"/>
        </button>
      </form>

      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-xl">Produtos</h4>
        <div>
          <ul class="w-full flex flex-col gap-2">
            <li class="w-full flex items-center justify-between" v-for="product in productsList" >
              <span>
                {{ product.title }}
              </span>
              <button class="ml-2" @click="addProductToTagList(product)">
                <PlusCircle size="20"/>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <TagsList :show="listShow" :tags="tagsList" ref="TagList" @removeProductTag="removeProductTag($event)"/>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from "~/layouts/AdminLayout.vue";
import { Tag, Search, PlusCircle } from 'lucide-vue-next'
import Product from "~/models/Product";

const listShow = ref(false)
const tagsList = ref<Product[]>([])

const productsList = ref<Product[]>([])
const meta = ref({})


function toogleTagsList(){
  listShow.value = !listShow.value
}

function removeProductTag(product : Product){
  const index = tagsList.value.findIndex((item) => item.id === product.id)

  if(index !== -1){
    tagsList.value.splice(index, 1)
  }
}

function addProductToTagList(product : Product){
    tagsList.value.push(product)
}


async function fetchProducts(){
  const apiURL = 'http://127.0.0.1:3333'
  // const response = await fetch(`${apiURL}/products`, { mode: 'no-cors' });
  const products: any = await $fetch(`${apiURL}/products`).catch((error) => error.data)
  productsList.value = products.data
  meta.value = products.meta
}

onMounted(async() => {
  await fetchProducts()
})

</script>
