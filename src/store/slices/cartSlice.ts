import type { Product } from '@/api/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface cartProduct extends Product {
    count: number
}
interface cartState {
    items: cartProduct[],
    totalPrice: number,
    totalCount: number,
    isOpen: boolean
}
const initialState: cartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
    isOpen: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const exsist = state.items.find(item => item.id === action.payload.id)
            if (!exsist) {
                state.items.push({ ...action.payload, count: 1 })
                state.totalCount += 1
            } else {
                exsist.count++
                state.totalCount++
            }
        },
        decreaseItem: (state, action: PayloadAction<Product>) => {
            const exsist = state.items.find(item => item.id === action.payload.id)
            if (!exsist) {
                return
            }
            exsist.count--
            state.totalCount--
            if (exsist.count < 1) {
                state.items = state.items.filter(item => item.id !== exsist.id)
            }
        }
    }
})

export const { addItem, decreaseItem } = cartSlice.actions
export default cartSlice.reducer