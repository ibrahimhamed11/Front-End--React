import { configureStore } from "@reduxjs/toolkit";
import SellerSlice from "./Slices/SellerSlice";
import UserSlice from "./Slices/UserSlice";



export const Store = configureStore({
    reducer : {
        SellerSlice,
        UserSlice
    }
});
