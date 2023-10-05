<template>
  <div class="flex justify-center items-center w-full h-screen px-4">
    <div class="flex flex-col items-center w-full max-w-[400px] bg-red-primary rounded py-6 px-4 shadow">
        <LogoWhite />

        <form class="mt-6 text-white flex flex-col justify-center gap-2">
            <h4 class="text-center">Realize login para acessar o painel administrativo</h4>
            <div class="flex gap-4">
              <div class="w-full flex bg-white p-2 rounded">
                <AtSign size="20" color="#4A0000"/>
                <input type="text" placeholder="Usuário" class="outline-none px-2 text-red-primary bg-transparent flex-1" />
              </div>
              <div class="w-full flex bg-white p-2 rounded">
                <KeyRound size="20" color="#4A0000"/>
                <input type="password" placeholder="Senha" class="outline-none px-2 text-red-primary bg-transparent flex-1" />
              </div>
              <button class="w-full flex items-center justify-center py-2 text-red-primary bg-white rounded">
                Login
              </button>
            </div>

            <div class="flex justify-center mt-8">
              <NuxtLink to="/Auth/ForgotPassword" class="text-center underline">Esqueci Minha Senha</NuxtLink>
            </div>
        </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AtSign, KeyRound } from 'lucide-vue-next'

</script>
