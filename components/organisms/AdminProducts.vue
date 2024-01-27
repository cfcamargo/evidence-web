<template>
    <div class="flex flex-col gap-4 w-full px-2 py-2">
        <div class="py-2">
            <h2 class="font-bold text-2xl text-red-primary">Listagem de Produtos</h2>
        </div>
        <div class="flex-1">
            <table class="w-full">
                <thead>
                    <tr class="border border-gray-300">
                        <th class="px-2 text-left pl-2 border py-2">Id</th>
                        <th class="px-2 text-left pl-2 border py-2">Nome</th>
                        <th class="px-2 text-left pl-2 border py-2">Descricao</th>
                        <th class="px-2 text-left pl-2 border py-2">Fabricante</th>
                        <th class="px-2 text-left pl-2 border py-2">Preco</th>
                        <th class="px-2 text-left pl-2 border py-2">Estoque</th>
                        <th class="px-2 text-left pl-2 border py-2">Ativo?</th>
                        <th class="px-2 text-left pl-2 border py-2">Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in listProducts" :key="product.id" class="border-b border-gray-300">
                        <td class="border-l px-2 py-3">{{ product.system_id}}</td>
                        <td class="border-l px-2 py-3 overflow-ellipsis">{{ product.title }}</td>
                        <td class="border-l px-2 py-3 overflow-ellipsis">{{ product.descroption }}</td>
                        <td class="border-l px-2 py-3 overflow-ellipsis">{{ product.brand }}</td>
                        <td class="border-l px-2 py-3 overflow-ellipsis">{{ product.price }}</td>
                        <td class="border-l px-2 py-3 overflow-ellipsis">{{ product.quantity }}</td>
                        <td class="border-l px-2 py-3">{{ product.inactive === 0 ? 'Nao' : 'Sim' }}</td>
                        <td class="border-x justify-center px-2 py-3 flex items-center gap-2">
                            <button @click="editProduct(product)">
                                <Pencil color="gray"/>
                            </button>
                            <button>
                                <Trash color="red"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="py-10">
            <q-pagination
                v-model="current"
                :max="100"
                :max-pages="6"
                ellipses
                direction-links
                unelevated
                color="gray-primary"
                text-color="red-primary"
                active-color="red-primary"
                active-text-color="white"
                @update:model-value="changePage($event)"
            />
        </div>


        <ModalEdit :product="productToEdit" :open="modalEditShow" v-if="!loading && productToEdit" @cancelEditProduct="cancelEditProduct"/>
    </div>
</template>

<script setup lang="ts">
import { Pencil, Trash } from 'lucide-vue-next'
import { useProductsStore } from '@/store/products';
import Product from '~/models/Product';

const emits = defineEmits(['getProductsByPage'])

const { loading } = defineProps({
    loading: Boolean
}) 

const productToEdit = ref<Product | null>(null)
const modalEditShow = ref(true)

const current = ref(1)

function changePage(page: number){
    current.value = page
    emits('getProductsByPage',page)
}

function editProduct(product: Product){
    productToEdit.value = product
    modalEditShow.value = true
}

const productsStore = useProductsStore();

const listProducts = computed((): Product[] => productsStore.products.data);

function cancelEditProduct(){
    productToEdit.value = null
    modalEditShow.value = false
}


</script>