<template>
  <button class="flex items-center gap-2 text-red-primary px-4 py-1 rounded border border-transparent hover:border-red-primary">
    <MessageSquare :size="25" color="#4A0000"/>
    <span>Atendimento</span>
  </button>
</template>

<script setup lang="ts">
import { MessageSquare } from 'lucide-vue-next'

</script>
