<template>
    <div class="w-full bg-white" v-if="props.show">
       <Container>
        <div class="flex  gap-4 justify-center py-6 w-full    ">
            <button class="flex   w-full  gap-[20px]" v-for="category in props.categories">
               {{ category }}
            </button>
        </div>
        <div>
               
        </div>
       </Container>
    </div>
</template>



<script setup lang="ts">

import menuItems from "@/models/MenuItems"


const props = defineProps<{
     categories:string[],
     show:boolean
}>()






</script>

