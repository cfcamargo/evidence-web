<template>
    <div class="w-full h-[calc(100vh_-_120px)] bg-gray-primary z-10">
        <Container class="relative">
            <div class="w-full flex items-center justify-center py-6 gap-20 absolute top-0 left-0 right-0">
                <div class="flex items-center gap-4">
                  <CreditCard :size="50"/>
                  <div class="flex flex-col justify-center items-start font-bold">
                    <span>Até 12x sem juros</span>
                    <span>Cartão de crédito</span>
                  </div>
                </div>

              <div class="flex items-center gap-4">
                <Truck :size="50"/>
                <div class="flex flex-col justify-center items-start font-bold">
                  <span>Entrega Gratuita</span>
                  <span>Entrega Rápida</span>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <Hammer :size="50"/>
                <div class="flex flex-col justify-center items-start font-bold">
                  <span>Montagem Gratuita</span>
                  <span>A Montagem mais rápida da região</span>
                </div>
              </div>
            </div>

            <div class="flex gap-4 h-[calc(100vh_-_120px)] w-full z-10">
              <div class="flex relative flex-1  hover:flex-[2_2_0%] border border-red-500 h-full bg-[url('/sofa-banner.png')] bg-cover bg-center">
                 <h2 class="text-7xl font-bold text-white transform -rotate-90 absolute bottom-20 -right-5">Sofás</h2>
              </div>  

              <div class="flex flex-1 hover:flex-[2_2_0%] border border-red-500 h-full bg-blue-500">
                asjhdkahdjkash
              </div>

              <div class="flex flex-1 hover:flex-[2_2_0%] border border-red-500 h-full bg-green-500">
                ajkhsadjkhasd
              </div>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { CreditCard, Truck, Hammer } from 'lucide-vue-next'

</script>