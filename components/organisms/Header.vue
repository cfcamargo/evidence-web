<template>
    <header class="w-full sticky top-0 left-0 right-0 z-50 bg-gray-primary">
      <Container>
        <div class="w-full flex h-[80px] items-center gap-20 px-2">
          <NuxtLink to="/">
            <Logo icon_width="250"/>
          </NuxtLink>
          <SearchBar />
          <ContactButton />
        </div>
      </Container>
      <nav class="w-full bg-red-primary h-10 relative flex items-center">
        <Container class="flex gap-6 justify-center items-center">
          <button class="flex gap-4 items-center" @click="toogleSubmenuDropDown">
            <Menu :size="20" color="white" />
            <span class="text-white">
              Mais Produtos
            </span>
          </button>

          <button class="flex gap-4 items-center">
            <span class="text-white">
              Sala de estar
            </span>
          </button>

          <button class="flex gap-4 items-center">
            <span class="text-white">
              Sala de Jantar
            </span>
          </button>

          <button class="flex gap-4 items-center">
            <span class="text-white">
              Cozinha
            </span>
          </button>

          <button class="flex gap-4 items-center">
            <span class="text-white">
              Quarto
            </span>
          </button>

          <button class="flex gap-4 items-center">
            <span class="text-white">
              Escritório
            </span>
          </button>
        </Container>

        <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
          <div class="w-full absolute top-10 left-0 right-0 h-20 bg-red-500" v-if="showProductsDropDown">
            <Container class="px-4">
              <DropDownNavFilter />
            </Container>
          </div>
        </transition>
      </nav>
    </header>

</template>

<script setup lang="ts">
import { Menu } from "lucide-vue-next";

const showProductsDropDown = ref(true)

function toogleSubmenuDropDown(){
  showProductsDropDown.value = !showProductsDropDown.value
}


</script>