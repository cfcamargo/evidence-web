<template>
    <div class="flex flex-col gap-2 justify-center items-center">
        <h3 class="text-4xl font-bold text-red-primary">
            {{ text }}
        </h3>
        <div class="w-[100px] h-2 bg-red-primary rounded"/>
    </div>
</template>

<script setup lang="ts">
interface SectionTitleProps {
    text: string;
}

const props = defineProps<SectionTitleProps>()
const { text } = props

</script>