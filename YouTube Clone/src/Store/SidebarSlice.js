import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice=createSlice({
    name:'SidebarSlice',
    initialState:{
        isMenuOpen:false
    },
    reducers:{
        showSidebar:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
})
export const{showSidebar}=SidebarSlice.actions;
export default SidebarSlice.reducer;