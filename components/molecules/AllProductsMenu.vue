<template>
  <div class="w-full bg-white">
    <Container class="flex gap-2 bg-white ">
      <div class="flex flex-col gap-4 py-6 bg-white">
        <button @click="selectCategory(index)" v-for="(item, index) in categoryItems" :key="item.name">{{ item.name }}</button>
      </div>
      <div v-if="showItems" class="grid grid-cols-4 gap-3  ">
        <button class="m-[30px]" v-for="movel in categoryItems[categorySelecte].items" :key="movel">
          {{ movel }}
        </button>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import menuItems from "@/models/MenuItems";

const categorySelecte = ref(7);
const categoryItems = menuItems;
const showItems = ref(false);

function selectCategory(index: number) {
  categorySelecte.value = index;
  showItems.value = true;
  console.log(categorySelecte.value);
}
</script>