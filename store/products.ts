import { defineStore } from 'pinia'
import Product from '~/models/Product'

interface ProductsData {
    meta : {},
    data : []
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products : {} as ProductsData
    }),
    getters: {
        getProducts(): ProductsData {
            return this.products
        }
    },
    actions: {
        setProducts(products: ProductsData) {
            this.products = products
        },
    }
})