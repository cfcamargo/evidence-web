<template>
  <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
    <nav class="w-full h-[100vh] bg-zinc-900 flex flex-col gap-8 fixed bottom-0 left-0 right-0 py-8" v-show="props.show">
     <div class="w-full flex justify-end px-2">
       <button @click="$emit('toogleMenuHamburguer')">
         <X :size="30" color="white"/>
       </button>
     </div>

    <ul class="flex flex-col justify-center w-full items-center gap-8 text-white">
      <NuxtLink>Home</NuxtLink>
      <NuxtLink>Loja</NuxtLink>
      <NuxtLink>Sobre</NuxtLink>
      <NuxtLink>Contato</NuxtLink>
    </ul>
  </nav>
  </transition>

</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

const props = defineProps({
  show : {
    type: Boolean,
    required:true
  }
})
</script>
