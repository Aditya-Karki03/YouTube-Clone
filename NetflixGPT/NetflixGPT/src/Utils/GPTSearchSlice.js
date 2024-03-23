import { createSlice } from "@reduxjs/toolkit";

const GPTSearch=createSlice({
    name:'GPT Search',
    initialState:{
        search:false,
        suggestedMovies:{
            GPTRecommendation:null,
            TMDBResults:null
        }
    },
    reducers:{
        EnableGPTSearch:(state)=>{
            state.search=!(state.search);
        },
        addSuggestedMovies:(state,action)=>{
            state.suggestedMovies=action.payload;
        }
    }
})
export const{EnableGPTSearch,addSuggestedMovies}=GPTSearch.actions;
export default GPTSearch.reducer;