<template>
    <div class="flex gap-2" @click="updateCheck">
        <div class="rounded w-6 h-6 border border-gray-400 flex justify-center items-center" :class="props.check ? 'bg-gray-400' : ''">
            <CheckIcon v-show="props.check" />
        </div>
        <label>{{ props.label }}</label>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['updateCheck'])

interface InputCheckProps {
    label: string
    check: boolean
}

const props = defineProps<InputCheckProps>()

function updateCheck() {
    emits('updateCheck')
}

</script>
