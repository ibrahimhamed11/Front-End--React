import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/todo/";

export const addTodo = createAsyncThunk("Todo/add", async (data) => {
  try {
    await axios.post(`${api}add`, data);
  } catch (error) {
    console.log(error);
  }
});

export const getTodos = createAsyncThunk("Todo/get", async (_id) => {
  try {
    const response = await axios.get(`${api}${_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("Todo/del", async(_id) => {
    try{
        const response = await axios.delete(`${api}${_id}`);
        console.log(response)
    }catch (error) {
        console.log(error);
    }
})

export const endTodo = createAsyncThunk('Todo/end', async (_id) => {
    try{
        const response = await axios.patch(`${api}${_id}`,{status: "completed"});
        console.log(response)
    }catch(error){
        console.log(error)
    }
})

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: [],
    completed: [],
    removed: [],
  },
  reducers: {
    // deleteTodo: (state, action) => {
    //   console.log(action.payload);
    //   state.todos.splice(action.payload, 1);
    // },
    // endTodo: (state, action) => {
    //   let index = action.payload;
    //   state.todos[index].status = "completed";
    //   console.log(state.todos);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

// export const {  } = TodoSlice.actions;
export default TodoSlice.reducer;
