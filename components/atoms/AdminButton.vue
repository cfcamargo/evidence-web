<template>
  <div class="rounded-full p-2 border border-red-primary">
      <NuxtLink to="/Auth/login">
        <User2 size="30" color="#4A0000"/>
      </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { User2 } from 'lucide-vue-next'
</script>
