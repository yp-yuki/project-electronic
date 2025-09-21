import { type ApiResponse, type Product } from './types'
import { mockProductApi } from './mock/products'

export const productApi = {
    getProducts: async(): Promise<ApiResponse>=>{
        return mockProductApi.getProducts()
    }
}