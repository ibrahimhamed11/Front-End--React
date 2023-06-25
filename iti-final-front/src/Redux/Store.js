import { configureStore } from "@reduxjs/toolkit";
import SellerSlice from "./Slices/SellerSlice";
import UserSlice from "./Slices/UserSlice";
import ProductSlice from "./Slices/ProductSlice";
import BlogSlice from "./Slices/BlogSlice";
import TodoSlice from "./Slices/TodoSlice";
import CommentSlice from "./Slices/CommentSlice";



export const Store = configureStore({
    reducer : {
        SellerSlice,
        UserSlice,
        ProductSlice,
        BlogSlice,
        TodoSlice,
        CommentSlice
    }
});
