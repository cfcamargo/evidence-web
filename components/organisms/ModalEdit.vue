<template>
    <div class="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-50 flex justify-center items-center">
        <div class="bg-white p-8">
            <div>
                <h2 class="text-2xl font-bold mb-4">Editar Produto</h2>
            </div>

            <form @submit.prevent="submit">
                <div class="flex gap-4">
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded cursor-not-allowed">
                        <label class="font-bold" for="id">ID:</label>
                        <input class="outline-none flex-1" id="id" type="number" v-model="form.id" disabled>
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded">
                        <label class="font-bold" for="brand">Marca</label>
                        <input class="outline-none flex-1" id="brand" type="text" v-model="form.brand">
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded">
                        <label class="font-bold" for="category">Categoria</label>
                        <input class="outline-none flex-1" id="category" type="text" v-model="form.category">
                    </div>
                </div>
                <div class="mt-4">
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded">
                        <label class="font-bold" for="title">Nome:</label>
                        <input id="title" type="text" class="flex-1 outline-none" v-model="form.title">
                    </div>
                </div>
                <div class="mt-4">
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded">
                        <label class="font-bold" for="description">Descricao:</label>
                        <textarea id="description" type="text" class="w-full outline-none" v-model="form.descroption" />
                    </div>
                </div>
                <div class="mt-4 flex gap-4">
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded">
                        <label class="font-bold" for="price">Preco:</label>
                        <input id="price" type="number" class="flex-1 outline-none" v-model="form.price" />
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded">
                        <label class="font-bold" for="quantity">Quantidade:</label>
                        <input id="quantity" type="text" class="flex-1 outline-none" v-model="form.quantity" />
                    </div>
                    <div class="flex items-center gap-2 px-2 py-1 border border-gray-600 rounded flex-1">
                        <label class="font-bold" for="active">Inativo:</label>
                        <select name="active" v-model="inactive" id="active" class="flex-1 bg-none">
                            <option class="bg-white" :value="1">Sim</option>
                            <option class="bg-white" :value="0">Nao</option>
                        </select>
                    </div>
                </div>
                <div class="w-full" v-if="form.cover">
                    <div>
                        <h4>Imagens</h4>
                    </div>
                    <div v-if="form.cover">
                        <img :src="form.cover" alt="" class="w-[80px]">
                    </div>
                </div>
                <div class="w-full flex justify-end gap-4 py-4">
                    <button class="px-2 py-1 bg-gray-300 rounded text-gray-600 hover:brightness-90" type="button" @click="cancelEditProduct">CANCELAR</button>
                    <button class="px-6 py-1 bg-red-primary text-white rounded hover:brightness-90" type="submit">SALVAR</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import Product from '~/models/Product';
const emits = defineEmits(['cancelEditProduct'])

const inactive = ref(0)


const form = ref({
    id: 0,
    brand: '',
    category: '',
    clicks : '',
    cover: '',
    created_at : '',
    descroption : '',
    inactive : 0,
    price : 0,
    quantity : 0,
    system_id: null,
    title: '',
})


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

onMounted(() => {
    form.value.id = props.product.system_id
    form.value.brand = props.product.brand
    form.value.category = props.product.category
    form.value.cover = props.product.cover
    form.value.created_at = props.product.created_at
    form.value.descroption = props.product.descroption
    form.value.inactive = props.product.inactive
    form.value.price = props.product.price
    form.value.quantity = props.product.quantity
    form.value.title = props.product.title
})

function clearForm(){
    form.value = {
        id: 0,
        brand: '',
        category: '',
        clicks : '',
        cover: '',
        created_at : '',
        descroption : '',
        inactive : 0,
        price : 0,
        quantity : 0,
        system_id: null,
        title: '',
    }
    inactive.value = 0
}


function cancelEditProduct(){
    clearForm()
    emits('cancelEditProduct')
}

async function submit(){
    form.value.inactive = inactive.value
    console.log(form.value)
}

</script>
