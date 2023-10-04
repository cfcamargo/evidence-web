<template>
  <aside class="w-3/12 bg-red-primary max-w-[250px] px-2 py-2 h-screen">
    <div class="w-full py-6">
      <LogoWhite class="w-full"/>
    </div>
    <div class="flex-1 flex flex-col gap-2">
      <NuxtLink to="/Admin/Products" class="flex items-center gap-2 w-full rounded border border-gray-300 py-2 justify-center text-white">
        <PackageSearch size="16"/>
        <span>Produtos</span>
      </NuxtLink>
      <NuxtLink to="/Admin/tags" class="flex items-center gap-2 w-full rounded border border-gray-300 py-2 justify-center text-white">
        <Tag size="15"/>
        <span>Etiquetas</span>
      </NuxtLink>
    </div>

  </aside>
</template>

<script setup lang="ts">
import { Tag, PackageSearch } from 'lucide-vue-next'

</script>