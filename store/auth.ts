import { defineStore } from "pinia";
import Product from "~/models/Product";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: ""
    }),
    getters: {
        getToken(): string {
            return this.token;
        },
    },
    actions: {
        setToken(token: string) {
        this.token = token;
        },
    },
});
