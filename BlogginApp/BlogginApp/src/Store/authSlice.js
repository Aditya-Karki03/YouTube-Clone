import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:'auth',
    initialState:{
        LoginStatus:false,
        userData:null
    },
    reducers:{
        login:(state,action)=>{
            state.LoginStatus=true
            state.userData=action.payload;
        },
        logout:(state)=>{
            state.LoginStatus=false
            state.userDate=null
        }
    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer