import { createSlice } from "@reduxjs/toolkit";

const BannerSliderSlice = createSlice({
    name:'BannerSliderSlice',
    initialState: {
      activePage: 1,
      fetchMemo: {},
  },
    reducers:{
       setActivePage: (state , action) => {
        state.activePage = action.payload
       },
       setFetchMemo: (state , action) => {
         state.fetchMemo[state.activePage] = action.payload;
       }
    }
});

export const {setActivePage , setFetchMemo} = BannerSliderSlice.actions;
export default BannerSliderSlice.reducer;
