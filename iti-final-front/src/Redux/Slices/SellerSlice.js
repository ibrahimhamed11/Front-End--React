import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "seller/getAllProducts",
  async () => {
    try {
      const _id = await localStorage.getItem("id")
      console.log(_id)
      let response = await axios.get(`http://localhost:4000/products/seller/${_id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "seller/addProduct",
  async ({form_data}) => {
    try {
      console.log(form_data)
      let response = await axios.post(
        "http://localhost:4000/products/add",
        form_data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

const SellerSlice = createSlice({
  name: "seller",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: () => {
      console.log("pending");
    },

    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});


export default SellerSlice.reducer;
