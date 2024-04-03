import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";

const YtStore=configureStore({
    reducer:{
        sidebarToggle:SidebarSlice
    }
});

export default YtStore;