import { createSlice } from "@reduxjs/toolkit";

const MovieGridSlice = createSlice({
    name:'MovieGridSlice',
    initialState: {
       favList:[]
  },
    reducers:{
      setFavList: (state, action) => {
        const newItem = action.payload;
        let isDuplicate = false;
    
        if (!state.favList.some(item => item.id === newItem.id)) {
            state.favList = [...state.favList, newItem];
        }
    },
    deleteInMain:(state , action) => {
      const itemToRemove = action.payload;
      state.favList = state.favList.filter(item => item.id!==itemToRemove.id);
    }
    
    }
});

export const {setFavList , deleteInMain} = MovieGridSlice.actions;
export default MovieGridSlice.reducer;
