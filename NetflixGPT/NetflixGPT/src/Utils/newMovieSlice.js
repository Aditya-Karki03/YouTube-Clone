import { createSlice } from "@reduxjs/toolkit";

const listOfNewMovies=createSlice({
    name:'Movies',
    initialState:{
        movies:null,
        trailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        }
    }
})
export const{addMovies,addTrailer}=listOfNewMovies.actions;
export default listOfNewMovies.reducer;