import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'
import listOfNewMovies from './newMovieSlice'
const store=configureStore({
    reducer:{
        users:UserReducer,
        movies:listOfNewMovies
    }
});
export default store;