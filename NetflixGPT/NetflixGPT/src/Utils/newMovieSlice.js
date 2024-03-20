import { createSlice } from "@reduxjs/toolkit";

const listOfNewMovies=createSlice({
    name:'Movies',
    initialState:{
        movies:null,
        trailer:null,
        topRatedMovies:null,
        trendingMovies:null,
        recommendedMovies:null,
        upComingMovies:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        },
        TopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        TrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        recommendedMovies:(state,action)=>{
            state.recommendedMovies=action.payload;
        },
        upComingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        }
    }
})
export const{addMovies,addTrailer,TopRatedMovies,TrendingMovies,recommendedMovies,upComingMovies}=listOfNewMovies.actions;
export default listOfNewMovies.reducer;