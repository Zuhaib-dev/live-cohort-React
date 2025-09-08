import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[]
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loaduser:(state, action)=>{
            state.data = action.payload
        }
    }
})
export default userSlice.reducer
export const {loaduser} = userSlice.actions