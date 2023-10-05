<template>
  <div class="w-full bg-white">
    <Container class="flex gap-20 bg-white py-6">
      <div class="flex flex-col items-start gap-4 bg-white border-r-2 border-red-primary pr-6">
        <button @click="selectCategory(item.items)" @mouseenter="selectCategory(item.items)" v-for="item in categoryItems" :key="item.name">
          {{ item.name }}
        </button>
      </div>
      <div v-if="showItems" class="flex-1 mx-auto grid grid-cols-4 gap-3 h-10">
        <button class="text-left" v-for="item in selectedCategory" :key="item">
          {{ item }}
        </button>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import menuItems from "@/models/MenuItems";

const categoryItems = menuItems;
const showItems = ref(false);

const selectedCategory = ref<string[]>([]);

function selectCategory(items: string[]) {
  selectedCategory.value = items;
  showItems.value = true;

}
</script>