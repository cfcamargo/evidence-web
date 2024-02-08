<template>
    <div class="w-full h-screen bg-black/80 fixed top-0 left-0 bottom-0">
        <div class="w-full h-full flex justify-center items-center">
            <div class="bg-white rounded-lg flex flex-col p-6 w-[600px]">
                <div class="w-full">
                    <h2 class="text-xl font-bold text-red-primary mb-4">Criar Etiqueta Produto</h2>
                    <div class="flex flex-col gap-4">
                        <q-input filled v-model="form.title" label="Nome" stack-label :dense="false" />
                        <q-input filled v-model="form.brand" label="Fabricante" stack-label :dense="false" />
                        <div class="flex gap-2">
                            <q-input filled v-model="form.price" label="Preco" stack-label :dense="false" type="number"
                                class="flex-1" />
                            <q-input filled v-model="form.quantity" label="Quantidade de Etiquetas" stack-label
                                :dense="false" type="number" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex gap-4 justify-end mt-4">
                    <q-btn color="white" text-color="black" label="Cancelar"
                        @click="emits('closeAddProductToTicketsModal')" />
                    <q-btn color="red-primary" label="Adicionar" @click="confirmAddProduct" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Product from '@/models/Product';

import { useAdminStore } from '@/store/admin';

const emits = defineEmits(['closeAddProductToTicketsModal'])


const adminStore = useAdminStore()

const { product } = defineProps<{
    product: Product
}>()


const form = ref({
    id: null,
    title: '',
    brand: '',
    price: 0,
    quantity: 1,
})

const confirmAddProduct = () => {
    for (let i = 0; i < form.value.quantity; i++) {
        const product = {
            id: form.value.id,
            title: form.value.title,
            brand: form.value.brand,
            price: form.value.price
        }
        adminStore.addProductToTicketList(product)

    }
}

onMounted(() => {
    console.log('chamou o mounted')
    form.value.id = product.system_id
    form.value.title = product.title
    form.value.brand = product.brand
    form.value.price = product.price
})

</script>
