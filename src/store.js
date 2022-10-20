import { configureStore, createSlice } from "@reduxjs/toolkit";
import tabsContent from './store/tabsContent';
export default configureStore({
  reducer:{
    tabsContent: tabsContent.reducer,
  }
})