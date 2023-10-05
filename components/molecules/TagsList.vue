<template>
  <div class="w-1/3 max-w-[300px] bg-red-primary fixed right-0 px-4 py-2 text-white top-0 h-screen" v-show="props.show">
    <h4>Etiquetas selecionadas</h4>

    <ul class="mt-4 flex flex-col gap-4">
      <li class="w-full flex justify-between items-start" v-for="product in props.tags" :key="product.id">
        <span class="overflow-ellipsis flex-1">
          {{ product.title }}
        </span>
        <button @click="$emit('removeProductTag', product)" class="mt-1">
          <Trash size="15"/>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Trash } from 'lucide-vue-next'
import Product from "~/models/Product";

const props = defineProps<{
  show: boolean,
  tags : Product[]
}>()
</script>
