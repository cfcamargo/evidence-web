import { defineStore } from 'pinia'
import Product from '~/models/Product'
import ProductsData from '@/models/ProductsData'


interface filterProps {
    type : 'product' | 'category' | 'brand',
    value : string
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products : {} as ProductsData,
        mostProducts : [] as Product[],
        relationatedProducts : {} as ProductsData ,
        loading : false,
        filter: {} as filterProps
    }),
    getters: {
        getProducts(): ProductsData {
            return this.products
        },

        getMostProducts(): Product[] {
            return this.mostProducts
        },

        getRelationatedProducts(): Product[]{
            return this.relationatedProducts.data
        },

        getLoading(): boolean {
            return this.loading
        },
        getFilter(): filterProps {
            return this.filter
        }
    },
    actions: {
        setProducts(products: ProductsData) {
            this.products = products
        },
        setMostProducts(products: Product[]) {
            this.mostProducts = products
        },

        setRelationatedProducts(products: ProductsData) {
            this.relationatedProducts = products
        },

        setLoading(loading: boolean) {
            this.loading = loading
        },
        setFilter(filter: filterProps){
            this.filter = filter
        }
    }
})