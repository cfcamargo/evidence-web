<template>
  <form
      class="flex-1 h-10 bg-white rounded flex items-center group px-4 border"
      :class="formFocus ? 'border-red-primary' : 'border-transparent'"
      @submit.prevent="search"
      @focus="formFocus = !formFocus"
      @blur="formFocus = !formFocus"
  >
    <input type="text" v-model="searchTerm" class=" h-full focus:outline-none flex-1 px-2 flex items-center group-focus:border-blue-600">
    <Search :size="25"/>
  </form>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
const searchTerm = ref('')

const formFocus = ref(false)

async function search(){
  if(searchTerm.value.length>3){
    // vamos criar a requisicao aqui
  } else {
    // vamos implementar uma validacao aqui
  }
}

</script>
