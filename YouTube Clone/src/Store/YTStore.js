import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import SearchCacheSlice from "./SearchCacheSlice";
import subscribeSlice from "./SubscribedSlice";
import RecommendedVids from "./RecommendVidSlice";

const YtStore=configureStore({
    reducer:{
        sidebarToggle:SidebarSlice,
        searchCache:SearchCacheSlice,
        subscribed:subscribeSlice,
        videoList:RecommendedVids
    }
});

export default YtStore;