import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/index"
export const store = configureStore({
    reducer:{
        userSlice:userSlice
    },
    devTools: true,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch