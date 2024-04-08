import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice=createSlice({
    name:'Subscribe',
    initialState:{
        
    },
    reducers:{
        subscribedOrNot:(state,action)=>{
            state=Object.assign(state,action.payload);
            // for(let key in state){
            //     state[key]=!state[key]
            // }
        }
    }
})
export const{subscribedOrNot}=subscribeSlice.actions;
export default subscribeSlice.reducer;