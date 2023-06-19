import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { build } from "joi";
import { act } from "react-dom/test-utils";


export const getBlogs = createAsyncThunk('Blog/getBlogs',async ()=> {
    try{
     const response = await   axios.get("https://jsonplaceholder.typicode.com/posts");
     console.log(response.data)
     return response.data
    }catch(error) {
        console.log(error)
    }
})

export const getBlogById = createAsyncThunk("Blog/getBlogById",async (id)=> {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(response)
            return response.data
        }catch(error){
            console.log(error)
        }
} )

const BlogSlice = createSlice({
    name: "Blog",
    initialState: {
        blogs: [],
        oneBlog: {},
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled,(state,action) => {
            state.blogs = action.payload
        });
        builder.addCase(getBlogs.pending, (state,action) => {
            // console.log("pending")
        });
        builder.addCase(getBlogById.fulfilled,(state,action) => {
            state.oneBlog = action.payload
            console.log(state.oneBlog)
        })
    }
})



export default BlogSlice.reducer