import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        component: 'products',
    }),
    getters: {
        getComponent(): string {
            return this.component
        }
    },
    actions: {
        setComponent(component: string) {
            this.component = component
        }
    }
})