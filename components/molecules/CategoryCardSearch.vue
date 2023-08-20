<template>
    <button class="w-full h-[275px] bg-gray-primary relative rounded p-6 group cursor-pointer flex justify-center items-center">
        <nuxt-img
            :src="category.cover"
            layout="fill"
        />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/60 w-32 py-2 flex justify-center items-center text-zinc-950 group-hover:bg-white rounded">
            {{ category.text }}
        </div>
    </button>
</template>

<script setup lang="ts">
interface Category {
    text : string,
    cover : string
}

const props = defineProps<{
    category: Category
}>()
const { category } = props

</script>
