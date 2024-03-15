import { createSlice } from "@reduxjs/toolkit";

const users=createSlice({
    name:'Users',
    initialState:null,
    reducers:{
        addUsers:(state,action)=>{
            return action.payload;
        },
        removeUsers:()=>{
            return null;
        }
    }
});

export const {addUsers,removeUsers}=users.actions;
export default users.reducer;
