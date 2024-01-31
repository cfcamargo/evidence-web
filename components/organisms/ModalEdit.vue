<template>
    <div class="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-50 flex justify-center items-center" v-if="props.open">
        <div class="bg-white p-8 shadow-md rounded-lg">
            <div>
                <h2 class="text-2xl font-bold mb-4">Editar Produto</h2>
            </div>

            <form @submit.prevent="submit">
                <div class="flex gap-4">
                    <div class="flex items-center gap-2 px-2 py-1 cursor-not-allowed">
                        <q-input filled v-model="form.id" label="ID" stack-label :dense="false" :disable="true"/>
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1">
                        <q-input filled v-model="form.brand" label="Marca" stack-label :dense="false"/>
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1">
                        <q-input filled v-model="form.category" label="Categoria" stack-label :dense="false"/>
                    </div>
                </div>
                <div class="mt-4 w-full">
                    <div class="flex items-center gap-2 px-2 py-1 w-full">
                        <q-input filled v-model="form.title" label="Nome" stack-label :dense="false" class="w-full"/>
                    </div>
                </div>
                <div class="mt-4 w-full">
                    <div class="flex items-center gap-2 px-2 py-1 w-full">
                        <q-input
                            v-model="form.description"
                            filled
                            type="textarea"
                            label="Descricao"
                            class="w-full"
                        />
                    </div>
                </div>
                <div class="mt-4 flex gap-4">
                    <div class="flex items-center gap-2 px-2 py-1">
                        <q-input filled v-model="form.price" label="Preco" type="number" stack-label :dense="false"/>
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1">
                        <q-input filled v-model="form.quantity" label="Estoque" type="number" stack-label :dense="false"/>
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1 flex-1">
                        <q-select filled v-model="inactive" :options="['Sim', 'Não']" label="Inativo" class="w-full"/>
                    </div>
                </div>
                <div class="w-full" v-if="form.cover">
                    <div>
                        <h4 class="text-xl mt-4 py-2">Imagens</h4>
                    </div>
                    <div v-if="form.cover">
                        <img :src="form.cover" alt="" class="w-[80px]">
                    </div>
                </div>
                <div class="w-full flex justify-end gap-4 py-4">
                    <q-btn color="white" text-color="black" label="Cancelar" @click="cancelEditProduct"/>
                    <q-btn :loading="loading" color="red-primary" type="submit" label="Salvar" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import Product from '~/models/Product';
const emits = defineEmits(['cancelEditProduct','getProducts'])

const inactive = ref<'Sim' | 'Não'>('Não')


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


const form = ref({
    id: 0,
    brand: '',
    category: '',
    cover: '',
    created_at : '',
    description : '',
    inactive : 0,
    price : 0,
    quantity : 0,
    system_id: null,
    title: '',
})

function updateForm(){
    form.value.id = props.product.system_id
    form.value.brand = props.product.brand
    form.value.category = props.product.category
    form.value.cover = props.product.cover
    form.value.created_at = props.product.created_at
    form.value.description = props.product.description
    form.value.inactive = props.product.inactive
    form.value.price = props.product.price
    form.value.quantity = props.product.quantity
    form.value.title = props.product.title

    props.product.inactive === 0 ? inactive.value = 'Não' : inactive.value = 'Sim'
}

function clearForm(){
    form.value = {
        id: 0,
        brand: '',
        category: '',
        cover: '',
        created_at : '',
        description : '',
        inactive : 0,
        price : 0,
        quantity : 0,
        system_id: null,
        title: '',
    }
    inactive.value = 'Não'
}

function cancelEditProduct(){
    emits('cancelEditProduct')
    clearForm()
}

async function submit(){
    loading.value = true
    form.value.inactive = inactive.value === 'Sim' ? 1 : 0  
    await $fetch(`${import.meta.env.VITE_API_URL}/products/${props.product.system_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
    })
    loading.value = false
    cancelEditProduct()
    emits('getProducts')
}

watchEffect(() => {
    if (props.open) {
        updateForm();
    }
});



</script>
