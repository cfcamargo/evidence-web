import { defineStore } from 'pinia'
import Product from '~/models/Product'
import ProductsData from '@/models/ProductsData'


export const useProductsStore = defineStore('products', {
    state: () => ({
        products : {} as ProductsData,
        mostProducts : [] as Product[],
        loading : false
    }),
    getters: {
        getProducts(): ProductsData {
            return this.products
        },

        getMostProducts(): Product[] {
            return this.mostProducts
        },

        getLoading(): boolean {
            return this.loading
        }
    },
    actions: {
        setProducts(products: ProductsData) {
            this.products = products
        },
        setMostProducts(products: Product[]) {
            this.mostProducts = products
        },

        setLoading(loading: boolean) {
            this.loading = loading
        }
    }
})