import { defineStore } from 'pinia'
<<<<<<< HEAD
import Product from '~/models/Product'
import ProductsData from '@/models/ProductsData'
=======
import Product from '@/models/Product'
>>>>>>> 08987fa (feat: adicionando banner)


interface filterProps {
    type : 'product' | 'category' | 'brand',
    value : string
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products : {} as ProductsData,
        mostProducts : [] as Product[],
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

        setLoading(loading: boolean) {
            this.loading = loading
        },
        setFilter(filter: filterProps){
            this.filter = filter
        }
    }
})