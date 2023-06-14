import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProducts = createAsyncThunk('Product/products',async ()=> {
    try{
        let response =await axios.get("http://localhost:4000/products/getAll");
    console.log(response.data);
    return response.data
    }catch(error) {
        console.log(error)
    }
});

const ProductSlice = createSlice({
   name: "Product",
   initialState : {
    products : [],
    cartItems: [],
    wishList: [],
   },
   reducers : {
        addToCart : (state,action) => {
            console.log(action.payload);
            state.cartItems.push(action.payload)
        }
   },
   extraReducers: {
        [getAllProducts.pending] : () =>{
            console.log("pending")
        },
        [getAllProducts.fulfilled] : (state,action) => {
            state.products = action.payload
            console.log(state.products)
        },
   }
})

export const {addToCart} = ProductSlice.actions;
export default ProductSlice.reducer;