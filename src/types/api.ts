import { type ApiResponse, type Product } from '../api/types'
import { mockProductApi } from '../api/mock/products'
import { cartsApi } from '../api/mock/carts'

export const productApi = {
    getProducts: async (): Promise<ApiResponse> => {
        return mockProductApi.getProducts()
    }
}
export const cartApi = {
    addItem: async (items:Product[]): Promise<ApiResponse> => {
        return cartsApi.addCartItem(items)
    }
}