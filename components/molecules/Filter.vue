<template>
    <div class="relative">
        <button @click="show = !show" type="button" class="flex gap-2 px-4 py-1 border border-red-primary rounded items-center">
            <Filter :size="15"/>
            <span>Filtros</span>
        </button>


        <div class="w-[250px] shadow absolute top-10 right-0 bg-white px-2 py-4 flex flex-col" v-show="show">
            <h3 class="font-bold text-lg text-red-primary mb-6">{{ filter !== '' ? `Filtrado por: ${filter}` : 'Filtrar Por'  }}</h3>
            <div class="flex flex-col gap-1">
                <div class="font-bold text-red-primary">Marca</div>
                <ul>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Marca 1</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Marca 2</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Marca 3</li>
                </ul>
            </div>

            <div class="flex flex-col gap-1 mt-4">
                <div class="font-bold text-red-primary">Categoria</div>
                <ul>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Quarto</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Sala</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Cozinha</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Banheiro</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Decoração</li>
                    <li class="hover:text-red-primary hover:font-bold cursor-pointer">Área Externa</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Filter } from 'lucide-vue-next'

const show = ref(false)

const filter = ref('')

</script>
