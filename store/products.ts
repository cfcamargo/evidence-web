import { defineStore } from 'pinia'
import Product from '~/models/Product'

interface ProductsData {
    meta : {},
    data : []
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products : {} as ProductsData,
        loading : false
    }),
    getters: {
        getProducts(): ProductsData {
            return this.products
        },
        getLoading(): boolean {
            return this.loading
        }
    },
    actions: {
        setProducts(products: ProductsData) {
            this.products = products
        },
        setLoading(loading: boolean) {
            this.loading = loading
        }
    }
})