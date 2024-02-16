// middleware/auth.js
import { useAuthStore } from "~/store/auth";

interface loginData {
    expires_at: string,
    token: string,
    type: string
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    let token;
    if(process.client){
        token = useAuthStore().token;
        
    }
    if (!token) {
        return navigateTo('/auth/login');
        
    }
    try {
        const data:loginData = await $fetch(`${import.meta.env.VITE_API_URL}/auth`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
        }});
        
        if(data){
            authStore.setToken(data.token);
        }
    } catch (error) {
    // Se o token não é válido, remove o token inválido e redireciona para a página de login
        authStore.setToken('');
        navigateTo('/auth/login');
    }
    
});