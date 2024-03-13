import {configureStore} from '@reduxjs/toolkit'
const appStore=configureStore({
    reducer:{
        cart:cartReducerz
    }
})
export default appStore;