<template>
  <div class="w-full bg-white">
    <Container class="flex gap-2 bg-white ">
      <div class="flex flex-col justify-start items-start gap-4 py-6 bg-white border-r pr-8 w-[140px]">
        <button @click="selectCategory(index)" v-for="(item, index) in categoryItems" :key="item.name" :class="index === categorySelected && showItems ? 'text-red-primary font-bold' : 'hover:font-bold hover:text-red-primary'">
          {{ item.name }}
        </button>
      </div>
      <div v-if="showItems" class="px-8 grid grid-cols-4 gap-x-20 gap-y-2 justify-start items-start py-6">
        <button class="text-left hover:font-bold" v-for="movel in categoryItems[categorySelected].items" :key="movel">
          {{ movel }}
        </button>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import menuItems from "@/models/MenuItems";

const categorySelected = ref(0);
const categoryItems = menuItems;
const showItems = ref(true);

function selectCategory(index: number) {
  categorySelected.value = index;
  showItems.value = true;
  console.log(categorySelected.value);
}
</script>