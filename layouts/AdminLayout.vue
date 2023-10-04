<template>
  <div class="flex">
      <AdminSidebar />
      <div class="flex-1 flex justify-center px-4">
        <div class="w-full max-w-[1100px]">
          <slot />
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Evidence Moveis | Admin'
})
</script>
