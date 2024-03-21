import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'
import listOfNewMovies from './newMovieSlice'
import GPTSearchSlice from "./GPTSearchSlice";
const store=configureStore({
    reducer:{
        users:UserReducer,
        movies:listOfNewMovies,
        search:GPTSearchSlice
    }
});
export default store;