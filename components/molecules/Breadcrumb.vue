<template>
  <div class="py-2">
    <q-breadcrumbs>
      <q-breadcrumbs-el :label="route" v-for="(route, index) in routes" :key="index"/>
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  routes : string[]
}>()

const { routes } = toRefs(props)

</script>