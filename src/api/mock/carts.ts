import type { Product } from '../../types/apiType'

export const cartsApi = {
    addCartItem: (item: Product[]) => {
        return {
            code: 200,
            message: 'success',
            data: item
        }
    }
}