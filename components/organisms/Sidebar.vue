<template>
    <aside class="h-screen flex fixed top-0 bottom-0 flex-col bg-red-primary z-50" :class="open ? 'w-[300px]' : 'w-[100px]'"
        @mouseenter="openAside" @mouseleave="closeAside">
        <div class="w-full py-8 px-2">
            <LogoWhite class="w-full max-w-[200px] mx-auto" />
        </div>
        <div class="flex-1 flex flex-col gap-8">
            <button class="flex items-center gap-2 justify-center" @click="setComponentView('products')">
                <PackageSearch color="white" :width="30" :height="30" />
                <span class="font-bold text-white" v-if="open">Produtos</span>
            </button>
            <button class="flex items-center gap-2 justify-center" @click="setComponentView('tickets')">
                <Barcode color="white" :width="30" :height="30" />
                <span class="font-bold text-white" v-if="open">Etiquetas</span>
            </button>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { PackageSearch, Barcode } from 'lucide-vue-next'
import { useAdminStore } from '@/store/admin';

const adminStore = useAdminStore()

const open = ref(false)

const openAside = () => {
    open.value = !open.value
}

const closeAside = () => {
    open.value = false
}

const setComponentView = (component: 'products' | 'tickets') => {
    adminStore.setComponent(component)
}

</script>
