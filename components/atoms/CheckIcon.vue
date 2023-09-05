<template>
    <div>
        <svg :width="width" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.50001 13.0167L0.325012 7.84165L2.68335 5.48332L5.50001 8.30832L13.7333 0.0666504L16.0917 2.42498L5.50001 13.0167Z" fill="#4A0000"/>
        </svg>
    </div>
</template>

<script setup lang="ts">

interface CheckIconProps{
    width? : number
}

const props = withDefaults(defineProps<CheckIconProps>(),{
    width : 20
})
const { width } = props

</script>
