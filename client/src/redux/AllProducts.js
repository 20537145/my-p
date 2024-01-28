import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('carte/fetchProducts',async()=>{
  const res = await axios.get('http://localhost:6010/products/all')
  return res.data
})

const productsCard = createSlice({
  name:"productsList",
  initialState:{
    products:[],
    error:null,
    status: 'idle',
  },
  reducer:{

  },
  extraReducers:builder=>{
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.products = action.payload
      state.error = null
      state.status = 'succeeded';

    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
})
export default productsCard.reducer