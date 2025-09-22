import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlice'
export const store = configureStore({
    reducer:{
        userSlice:userSlice,
        cartSlice: cartSlice,
    },
    devTools: true,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch