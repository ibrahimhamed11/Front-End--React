import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllProducts = createAsyncThunk("product/getAllProducts",async ()=> {
 
    let response = await axios.get('https://dummyjson.com/products');
    console.log(response.data.products)
    return response.data.products


})

const SellerSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    },
    extraReducers : {
      [getAllProducts.pending]:()=> {
        console.log('pending');
      } ,

      [getAllProducts.fulfilled]: (state,action)=> {
        state.products = action.payload
      }
    }
  },);

export const { addProuct } = SellerSlice.actions;
export default SellerSlice.reducer;
