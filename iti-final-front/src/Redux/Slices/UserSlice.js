import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

export const logInUser = createAsyncThunk("Auth/logIn", async (name,email,username,phone,password,address,age,role) => {
  try {
    let response = await axios.post("http://localhost:4000/user/login", name,email,username,phone,password,address,age,role);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserData = createAsyncThunk("Auth/getData", async (userId)=> {
    try {
        let response = await axios.get(`http://localhost:4000/user/${userId}`);
        return response.data.data
        
    }catch(error) {
      console.log(error)
    }
})

const UserSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoggedIn: false,
    accessToken: localStorage.getItem("tkn") || null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // logIn: (state) => {
    //   const token = localStorage.getItem("tkn");
    //   if (token) {
    //     const tokenDecoded = jwtDecode(localStorage.getItem("tkn"));
    //     console.log(tokenDecoded)
    //     state.user = tokenDecoded.userId;
    //     console.log(state.user)
    //     console.log(state.user)
    //     state.isLoggedIn = true;
    //   }
    // },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("tkn");
    },
  },
  extraReducers: {
    [logInUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [logInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("tkn", action.payload.token);
      localStorage.setItem("id",state.user._id);
    },

    [logInUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getUserData.fulfilled] : (state,action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    }
  },
});

export const { logOut, logIn } = UserSlice.actions;
export default UserSlice.reducer;
