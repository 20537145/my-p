import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../redux/userSlice'
import productSlice from '../redux/productCreate'
import productsCard from '../redux/productList';
export const store = configureStore({
    reducer:{
        auth : authSlice,
        product: productSlice,
        productsList:productsCard ,
    }
 
  
})
