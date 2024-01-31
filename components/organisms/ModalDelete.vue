<template>
    <div class="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-50 flex justify-center items-center" v-if="props.open">
        <div class="bg-white p-8 shadow-md rounded-lg w-full max-w-[600px]">
            <div>
                <h2 class="text-2xl font-bold mb-4">Deletar Produto</h2>
                <p class="font-bold text-red-600 mt-2">Tem certeza que deseja Deletar o produto?</p>
                <p class="font-bold text-red-600 mb-6">Após confirmar esta acão não pode ser desfeita</p>
            </div>

            <div class="flex flex-col gap-4">
                <q-input filled v-model="props.product.title" label="NOME" stack-label :dense="dense" :disable="true"/>
                <q-input
                    v-model="props.product.description"
                    filled
                    type="textarea"
                    label="DESCRICAO"
                    :disable="true"
                />
                <q-input filled v-model="props.product.brand" label="Fabricante" stack-label :dense="dense" :disable="true" v-if="props.product.brand"/>
            </div>

            <div class="py-4 flex justify-end gap-4">
                <q-btn color="white" text-color="black" label="Cancelar" @click="closeDeleteProduct"/>
                <q-btn :loading="loading" color="red-primary" @click="confirmDeleteProduct()" label="Deletar" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Product from '~/models/Product';
const emits = defineEmits(['closeDeleteProduct','getProducts'])

const inactive = ref(0)


const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    },
    open: {
        type: Boolean,
        required: true
    }
})

const loading = ref(false)
const dense = ref(false)

function closeDeleteProduct(){
    emits('closeDeleteProduct')
}

async function confirmDeleteProduct(){
    loading.value = true
    await $fetch(`${import.meta.env.VITE_API_URL}/products/${props.product.system_id}`, {
        method: 'DELETE',
    })
    loading.value = false
    closeDeleteProduct()
    emits('getProducts')
}

</script>
