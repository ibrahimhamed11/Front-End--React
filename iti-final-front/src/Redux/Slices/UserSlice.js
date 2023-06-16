import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const logInUser = createAsyncThunk("Auth/logIn", async (user) => {
  try {
    let response = await axios.post("http://localhost:4000/user/login", user);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

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
    logIn: (state) => {
      const token = localStorage.getItem("tkn");
      if (token) {
        const tokenDecoded = jwtDecode(localStorage.getItem("tkn"));
        state.user = tokenDecoded.userId;
        state.isLoggedIn = true;
      }
    },
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
  },
});

export const { logOut, logIn } = UserSlice.actions;
export default UserSlice.reducer;
