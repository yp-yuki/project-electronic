import type { Product } from '../types'

export const cartsApi = {
    addCartItem: (item: Product[]) => {
        console.log(item)
        return {
            code: 200,
            message: 'success',
            data: item
        }
    }
}