import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface userState{
    name: string,
    age: number
}
let initialState: userState = {
    name: '',
    age: 30
}
const slice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{
        updateUser:(state,action:PayloadAction<any>)=>{
            state = action.payload
        }
    }
})
export const {updateUser}=slice.actions
export default slice.reducer