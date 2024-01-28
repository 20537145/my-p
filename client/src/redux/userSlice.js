import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  isAuth: false,
  token: localStorage.getItem("x-auth-token"),
  error: null,
  users:[],
  wishlist:[]
};
export const registerUser = createAsyncThunk(
  "auth/register",
  async (newUser, { rejectedWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3000/register", newUser);
      return res.data
    } 
    catch (error) {
      return rejectedWithValue(error.response.data.message)
    }
  }
);
export const loginUser = createAsyncThunk("auth/login",async(check,{rejectedWithValue})=>{
  try {
    const res = await axios.post("http://localhost:3000/login", check);
      return res.data
  } catch (error) {
    return rejectedWithValue(error.response.data.message)
  }
})
export const fetchAllUsers = createAsyncThunk('auth/fetchUsers', async( token ,{rejectedWithValue})=> {
  try {
     const res = await axios.get("http://localhost:3000/all", {
         headers : {
             "x-auth-token": token
         }
     }) 
 if (res.status === 200) {
     return res.data
 } else {
     console.log("error fetching all users")
 }
 
  } catch (error) {
     return rejectedWithValue(error.response.data.msg)
  }
 
 })
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state,action)=>{
      localStorage.removeItem('token')
      state.isAuth=false;
      state.user=null;
      state.token=null;
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled,(state,action)=>{
      localStorage.setItem('token',action.payload.token);
      state.user=action.payload.user;
      state.isAuth=true;
      state.token = action.payload.token
      state.error = null
    })
    builder.addCase(registerUser.rejected, (state, action)=> {
      localStorage.removeItem("token")
      state.isAuth = false;
      state.user = null;
      state.token = null;
      state.error = action.payload
      })
      builder.addCase(loginUser.fulfilled,(state,action)=>{
        localStorage.setItem('token',action.payload.token)
        state.isAuth = true
        state.token = action.payload.token
        state.user = action.payload.user
        state.error = null
      })
      builder.addCase(loginUser.rejected,(state,action)=>{
        state.error = action.payload
        localStorage.removeItem('token')
        state.isAuth = null
        state.user = null
        state.token = null
      })
      builder.addCase(fetchAllUsers.fulfilled, (state,action)=> {
        state.user = action.payload.user
        state.isAuth = true
        state.token = action.payload.token
        state.error = null
        state.users = action.payload.users
    })
      
  }
});
export const {logout}= authSlice.actions;
export default authSlice.reducer;
