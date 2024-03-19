import { createSlice } from "@reduxjs/toolkit";

const listOfNewMovies=createSlice({
    name:'Movies',
    initialState:{
        movies:null,
        trailer:null,
        popularMovies:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        }
    }
})
export const{addMovies,addTrailer,addPopularMovies}=listOfNewMovies.actions;
export default listOfNewMovies.reducer;