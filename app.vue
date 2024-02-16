<template>
    <NuxtPage />
</template>


<script setup lang="ts">
import { useAuthStore } from './store/auth';
import 'animate.css';

const authStore = useAuthStore();

onMounted(() => {
    if(localStorage.getItem('authToken') !== null) {
        authStore.setToken(localStorage.getItem('authToken') as string)
    }
})

</script>
