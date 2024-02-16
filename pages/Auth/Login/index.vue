<template>
    <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div class="w-[500px] h-[600px] bg-white rounded-2xl shadow-md flex flex-col gap-10 justify-center items-center">
            <div class="flex flex-col gap-4 items-center">
                <Logo />
                <h2 class="font-bold text-2xl mt-8 text-red-primary">Área administrativa</h2>
            </div>

            <div class="w-[80%]" v-if="errorLogin">
                <p class="text-center text-red-600">Erro na tentativa de login, verifique seu email e senha e tente novamente</p>
            </div>
            <form @submit.prevent="handleLogin" class="w-full px-6 flex flex-col gap-2">
                <q-input outlined v-model="form.email" label="Email" type="email" :error="invalidForm" />
                <q-input outlined v-model="form.password" label="Senha" type="password" :error="invalidForm" />
                <q-btn :loading="loading" color="red-primary" label="Login" type="submit" />
            </form>
            <div>
                <p class="text-xs max-w-[80%] mx-auto text-center text-gray-400">Caso tenha problemas em realizar o login, contate o time de desenvolvimento</p>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/store/auth';

interface loginData {
    expires_at: string,
    token: string,
    type: string
}

const authStore = useAuthStore()

const form = ref({
    email: 'admin@evidence.com',
    password: 'admin@2024!'
})

const loading = ref(false)
const invalidForm = ref(false)
const errorLogin = ref(false)

const handleLogin = async() => {
    const invalid = validateForm()
    if(invalid) {
        invalidForm.value = true
        return
    }
    invalidForm.value = false
    try{
        const data:loginData = await $fetch(`${import.meta.env.VITE_API_URL}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.value)
        })
        authStore.setToken(data.token)
        navigateTo('/admin')
    } catch(err) {
        errorLogin.value = true
        invalidForm.value = true
    }
}

const validateForm = () => {
    if(form.value.email === '' || form.value.password === '') {
        return true
    } else {
        return false
    }
}

onMounted(() => {
    if(authStore.token !== '') {
        localStorage.setItem('authToken', authStore.token)
    }
})

</script>
