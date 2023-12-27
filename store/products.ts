import { defineStore } from 'pinia'
import Product from '~/models/Product'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products : [] as Product[]
    }),
    getters: {
        getProducts(): Product[] {
            return this.products
        }
    },
    actions: {
        setProducts(products: Product[]) {
            this.products = products
        },
    }
})