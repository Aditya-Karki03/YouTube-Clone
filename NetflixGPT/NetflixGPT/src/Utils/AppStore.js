import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'
const store=configureStore({
    reducer:{
        users:UserReducer
    }
});
export default store;