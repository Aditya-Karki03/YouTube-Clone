import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import SearchCacheSlice from "./SearchCacheSlice";

const YtStore=configureStore({
    reducer:{
        sidebarToggle:SidebarSlice,
        searchCache:SearchCacheSlice
    }
});

export default YtStore;