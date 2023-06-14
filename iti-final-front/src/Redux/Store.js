import { configureStore } from "@reduxjs/toolkit";
import SellerSlice from "./Slices/SellerSlice";
import UserSlice from "./Slices/UserSlice";
import ProductSlice from "./Slices/ProductSlice";



export const Store = configureStore({
    reducer : {
        SellerSlice,
        UserSlice,
        ProductSlice
    }
});
