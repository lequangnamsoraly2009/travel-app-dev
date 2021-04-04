import  { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name: 'products',
    initialState: [],
    reducers:{
        addProduct: (state,action)=>{
            state.push(action.payload);
        }
    }
});

export const {addProduct} = product.actions;
export default product.reducer;