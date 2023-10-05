<template>
  <div class="flex justify-center items-center w-full h-screen px-4">
    <div class="flex flex-col items-center w-full max-w-[400px] bg-red-primary rounded py-6 px-4 shadow">
      <LogoWhite />

      <form class="mt-6 text-white flex flex-col justify-center gap-2 w-full">
        <h4 class="text-center">Digite o email utilizado no cadastro</h4>
        <div class="flex gap-4">
          <div class="w-full flex bg-white p-2 rounded">
            <Mail size="20" color="#4A0000"/>
            <input type="email" placeholder="Email" class="outline-none px-2 text-red-primary bg-transparent flex-1" />
          </div>
          <button class="w-full flex items-center justify-center py-2 text-red-primary bg-white rounded">
            Resetar
          </button>
        </div>

        <div class="flex justify-center mt-8">
          <NuxtLink to="/Auth/Login" class="text-center underline">Realizar Login</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail } from 'lucide-vue-next'

</script>
