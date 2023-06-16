import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { Navigate } from "react-router-dom";


// const navigate = Navigate();
export const getAllProducts = createAsyncThunk("Product/products", async () => {
  try {
    let response = await axios.get("http://localhost:4000/products/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getProductById = createAsyncThunk("Product/getProductById", async (_id) => {
    try {
            let response = await axios.get(`http://localhost:4000/products/${_id}`)
            return response.data
    }catch (error) {
        console.log(error)
    }
});

export const addToCart = createAsyncThunk("Product/addTocart", async ({product,user,quantity})=> {
    try {
        let response = await axios.post('http://localhost:4000/cart/add',{product,user,quantity})
        console.log(response);
    }catch(error) {
        console.log(error);
    }
})

export const getCartItems = createAsyncThunk("Product/getCartItems", async (userId)=> {
  try {
    let response = await axios.get(`http://localhost:4000/cart/${userId}`);
    console.log(response)
    return response.data
  }catch(error) {
    console.log(error);
  }
})

export const deleteCartItem = createAsyncThunk("Product/detelte",async (id)=> {
  let response= await axios.delete(`http://localhost:4000/cart/${id}`);
  console.log(response)
})

const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    cartItem: {},
    cartItems: [],
    wishList: [],
    product: {},
  },

  reducers: {
    // addToCart : (state,action) => {
    //     console.log(action.payload);
    //     state.cartItem = action.payload;
    //     console.log()
    // }
  },
  extraReducers: {
    [getAllProducts.pending]: () => {

    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.product = action.payload
    },
    [getCartItems.fulfilled] : (state,action) => {
      state.cartItems = action.payload;
      console.log(state.cartItems)
    }
  },
});

// export const {addToCart} = ProductSlice.actions;
export default ProductSlice.reducer;
