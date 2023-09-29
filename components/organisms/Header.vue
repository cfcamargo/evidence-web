<template>
  <header class="w-full sticky top-0 left-0 right-0 z-50 bg-gray-primary">
    <Container>
      <div class="w-full flex h-[80px] items-center gap-20 px-2">
        <NuxtLink to="/">
          <Logo :icon_width="250" />
        </NuxtLink>
        <SearchBar />
        <ContactButton />
      </div>
    </Container>
    <nav class="w-full bg-red-primary h-10 relative flex items-center" @mouseleave="closeCategoryMenu" @touchstart="closeCategoryMenu" >
      <Container class="flex gap-6 justify-center items-center"    >
        <button class="flex gap-4 items-center"   @mouseenter='toggleSubmenuDropDown'  >
          <Menu :size="20" color="white" />
          <span class="text-white">Mais Produtos</span>
        </button>

        <button class="flex gap-4 items-center" v-for="item in categoryItems" @mouseenter="toggleCategoryMenu(item.items)"
          :key="item.name">
          <span class="text-white w-full h-full p-3 ">{{ item.name }}</span>
        </button>
      </Container>

      <transition enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp">
        <div class="w-full absolute top-10 left-0 right-0 h-20" v-if="showProductsDropDown">

        </div>
      </transition >

      <transition enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp">
        <div class="w-full absolute top-10 left-0 right-0 h-20" v-if="showCategoryMenu">
          <Category :show="showCategoryMenu" :categories="itemToShow" />
        </div>
      </transition>
      <transition enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp">
        <div  class="w-full absolute top-10 left-0 right-0 h-20 bg-white h-full" v-if="showProductsDropDown"  >
          <AllProductsMenu @mouseleave="toggleSubmenuDropDown" />
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import menuItems from "@/models/MenuItems";


const showProductsDropDown = ref(false);
const showCategoryMenu = ref(false);
const categoryItems = menuItems;
const itemToShow = ref<string[]>([]);

function toggleSubmenuDropDown() {
  showCategoryMenu.value = false;
  showProductsDropDown.value = !showProductsDropDown.value;
}

// Função para exibir o submenu de Categorias
function toggleCategoryMenu(categories: string[]) {
  showProductsDropDown.value = false;
  showCategoryMenu.value = true
  itemToShow.value = categories
}

function closeCategoryMenu() {
  showCategoryMenu.value = false;
  itemToShow.value = [];
  

}





</script>

