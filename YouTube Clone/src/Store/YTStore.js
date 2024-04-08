import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import SearchCacheSlice from "./SearchCacheSlice";
import subscribeSlice from "./SubscribedSlice";

const YtStore=configureStore({
    reducer:{
        sidebarToggle:SidebarSlice,
        searchCache:SearchCacheSlice,
        subscribed:subscribeSlice
    }
});

export default YtStore;