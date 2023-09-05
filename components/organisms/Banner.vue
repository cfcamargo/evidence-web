<template>
    <div class="w-full h-[calc(100vh_-_120px)] bg-gray-primary py-10 z-10 border-2 border-red-600">
        <Container>
            <div class="w-full flex items-center justify-center py-6 gap-20">
                <div class="flex items-center gap-4">
                  <CreditCard size="50"/>
                  <div class="flex flex-col justify-center items-start font-bold">
                    <span>Até 12x sem juros</span>
                    <span>Cartão de crédito</span>
                  </div>
                </div>

              <div class="flex items-center gap-4">
                <Truck size="50"/>
                <div class="flex flex-col justify-center items-start font-bold">
                  <span>Entrega Gratuita</span>
                  <span>Entrega Rápida</span>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <Hammer size="50"/>
                <div class="flex flex-col justify-center items-start font-bold">
                  <span>Montagem Gratuita</span>
                  <span>A Montagem mais rápida da região</span>
                </div>
              </div>
            </div>

            <div>

            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { CreditCard, Truck, Hammer } from 'lucide-vue-next'

</script>