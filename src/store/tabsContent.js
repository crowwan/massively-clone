import { createSlice } from "@reduxjs/toolkit";

const tabsContent = createSlice({
  name: 'tabsContent',
  initialState: [{
    id:0,
    title: 'THIS IS MASSIVELY',
    path:'/',
    show: true,
  },
  {
    id:1,
    title: 'GENERIC PAGE',
    path:'/generic',
    show: false,
  },
  {
    id:2,
    title: 'ELEMENTS REFERENCE',
    path:'/element-reference',
    show: false,
  }],
  reducers:{
    onClickTabs(state,id){
      state.map((tab)=>{
        if(tab.id === parseInt(id.payload)) {
          state.show = true;
        }else{
          state.show = false;
        }
      })
    }
  }
})

export default tabsContent;
export const { onClickTabs } = tabsContent.actions;