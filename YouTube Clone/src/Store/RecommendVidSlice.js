import { createSlice } from "@reduxjs/toolkit";

const RecommendedVids=createSlice({
    name:'Recommended Videos',
    initialState:{
        arrOfVids:[]
    },
    reducers:{
        addRecommendedVids:(state,action)=>{
            state.arrOfVids=action.payload;
        }
    }
})
export const{addRecommendedVids}=RecommendedVids.actions;
export default RecommendedVids.reducer;