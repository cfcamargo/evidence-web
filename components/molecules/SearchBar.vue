<template>
  <form
      class="flex-1 h-10 bg-white rounded flex items-center group px-4 border relative"
      :class="formFocus ? 'border-red-primary' : 'border-transparent'"
      @submit.prevent="search"
      @focus="formFocus = !formFocus"
      @blur="formFocus = !formFocus"
  >
    <input type="text" v-model="searchTerm" @input="search" class=" h-full focus:outline-none flex-1 px-2 flex items-center group-focus:border-blue-600">
    <Search :size="25"/>

    <transition enter-active-class="animate__animated fadeInDown" leave-active-class="animate__animated fadeOutUp">
      <div class="absolute w-full max-h-[400px] overflow-scroll border-red-primary bg-white top-12 z-50 left-0 rounded px-4 py-4 shadow gap-2" v-if="produtsSearchListShow" v-click-outside="closeSearchResults">
          <NuxtLink class="w-full rounded flex gap-4 items-center py-4" v-for="product in products" :key="product.id" :to="`/shop/${product.system_id}`">
            <div class="w-[80px] h-[80px] bg-red-900">
              <nux-img :src="product.cover"/>
            </div>

            <div class="flex-1 flex">
                <div class="flex flex-col gap-2 flex-1">
                  <p class="text-lg font-bold">{{  product.title }}</p>
                  <span class="text-xs"> {{  product.brand }}</span>
                </div>

                <div>
                  <span class="text-lg text-red-primary">{{ transformToMoney(product.price) }}</span>
                </div>
            </div>
          </NuxtLink>
      </div>
    </transition>
  </form>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
import Product from "~/models/Product";
const searchTerm = ref('')

const formFocus = ref(false)

const products = ref<Product[]>([])
const produtsSearchListShow = ref(false)

async function search(){
  if(searchTerm.value.length>3){
    const data:any = await $fetch(`${import.meta.env.VITE_API_URL}/products?product=${searchTerm.value}`)
    if(data.data.length > 0){
      produtsSearchListShow.value = true
      products.value = data.data
    } else {
      produtsSearchListShow.value = true
      products.value = []
    }
  } 
}

function transformToMoney(value: number){
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function closeSearchResults(){
  produtsSearchListShow.value = false
}

</script>
