<template>
    <header class="fixed top-0 left-0 right-0">
      <Container>
        <div class="w-full flex justify-between items-center h-[80px] px-2">
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>

          <nav class="xs:hidden md:flex gap-8 uppercase">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/shop">Loja</NuxtLink>
            <NuxtLink to="/about">Sobre</NuxtLink>
            <NuxtLink to="/contact">Contato</NuxtLink>
          </nav>

          <div class="flex gap-2 items-center">
            <Search />
            <button @click="toogleMenuHamburguer" class="md:hidden">
              <Menu :size="30"/>
            </button>
            <HamburguerMenu :show="hamburguerShow" @toogleMenuHamburguer="toogleMenuHamburguer"/>
          </div>
        </div>
      </Container>
    </header>
</template>

<script setup lang="ts">
import { Menu } from "lucide-vue-next";

const hamburguerShow = ref(false)

function toogleMenuHamburguer(){
  hamburguerShow.value = !hamburguerShow.value
}
</script>