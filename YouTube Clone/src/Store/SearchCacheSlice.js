import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice=createSlice({
    name:'SearchCache',
    initialState:{
        
    },
    reducers:{
        addToCache:(state,action)=>{
           
            state=Object.assign(state,action.payload)
        }
    }
})
export const{addToCache} = searchCacheSlice.actions;
export default searchCacheSlice.reducer;