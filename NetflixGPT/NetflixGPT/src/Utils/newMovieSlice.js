import { createSlice } from "@reduxjs/toolkit";

const listOfNewMovies=createSlice({
    name:'Movies',
    initialState:{
        movies:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload;
        }
    }
})
export const{addMovies}=listOfNewMovies.actions;
export default listOfNewMovies.reducer;