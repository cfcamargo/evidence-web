<template>
  <AdminLayout>
    <div class="w-full flex justify-between items-center py-2">
      <Breadcrumb :routes="['Admin', 'Etiquetas']"/>
      <button class="relative" @click="toogleTagsList">
        <Tag />
        <span class="rounded-full text-xs bg-red-primary text-white absolute -bottom-1 -right-2 w-5 h-5 flex items-center justify-center">
          6
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
          <ul class="w-full">
            <li class="w-full flex items-center justify-between">
              <span>
                Produto 1
              </span>
              <button class="ml-2">
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

const listShow = ref(true)
const tagsList = ref<Product[]>([
  {
    id : 1,
    title : 'Produto 1',
    description : 'Descrição do produto 1',
    price : 10,
    cover : 'https://picsum.photos/200/300',
    inactive : 0,
    systemId : 23,
    clicks: 20,
    brand : 'Aleatorio',
    category : 'Casa',
    created_at : '',
    quantity : 20,
    updated_at : ''
  },
  {
    id : 2,
    title : 'Produto 2',
    description : 'Descrição do produto 1',
    price : 10,
    cover : 'https://picsum.photos/200/300',
    inactive : 0,
    systemId : 23,
    clicks: 20,
    brand : 'Aleatorio',
    category : 'Casa',
    created_at : '',
    quantity : 20,
    updated_at : ''
  },
  {
    id : 3,
    title : 'Produto 3',
    description : 'Descrição do produto 1',
    price : 10,
    cover : 'https://picsum.photos/200/300',
    inactive : 0,
    systemId : 23,
    clicks: 20,
    brand : 'Aleatorio',
    category : 'Casa',
    created_at : '',
    quantity : 20,
    updated_at : ''
  },
])


function toogleTagsList(){
  listShow.value = !listShow.value
}

function removeProductTag(product : Product){
  const index = tagsList.value.findIndex((item) => item.id === product.id)

  if(index !== -1){
    tagsList.value.splice(index, 1)
  }
}

</script>
