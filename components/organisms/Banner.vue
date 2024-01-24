<template>
    <div class="w-full h-[calc(100vh_-_120px)] z-10">
        <Container class="relative">
            <!-- <div class="w-full flex items-center justify-center py-6 gap-20 absolute top-0 left-0 right-0 z-50" >
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
            </div> -->
            
            <div class="flex gap-4 h-[calc(100vh_-_120px)] w-full z-10 py-4">
              <div class="flex relative flex-1 rounded-3xl  hover:flex-[2_2_0%] h-full bg-banner-sofa bg-cover bg-center transition-all ease-in-out hover:shadow-md">
                  <h2 class="text-7xl font-bold text-white transform -rotate-90 absolute bottom-[5.5rem] -right-[30px]">Sofás</h2>
              </div>  

              <div class="flex relative flex-1 rounded-3xl  hover:flex-[2_2_0%] h-full bg-banner-cozinha bg-cover bg-center transition-all ease-in-out hover:shadow-md">
                  <h2 class="text-7xl font-bold text-white transform -rotate-90 absolute bottom-32 -right-[64px]">Cozinha</h2>
              </div> 

              <div class="flex relative flex-1 rounded-3xl  hover:flex-[2_2_0%] h-full bg-banner-colchao bg-cover bg-center transition-all ease-in-out hover:shadow-md">
                  <h2 class="text-7xl font-bold text-white transform -rotate-90 absolute bottom-[9.4rem] -right-[90px]">Colchões</h2>
              </div> 
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { CreditCard, Truck, Hammer } from 'lucide-vue-next'

</script>