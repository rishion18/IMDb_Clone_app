import { createSlice } from "@reduxjs/toolkit";


const favouritesReducerSlice = createSlice({
    name : 'favouritesReducerSlice',
    initialState : {
        favouriteList:[],
        genreList : [],
        renderList:[],
        originalRenderList :[],
        selectedGenre : null
    },
    reducers:{
        setFavouriteList:(state , action) => {state.favouriteList = action.payload},
        setGenreList: (state , action) => {
            // const favList = action.payload;
            const genre = Array.from(new Set(state.favouriteList?.map(favourite => favourite.genre_ids[0])));
            state.genreList = genre;
        },

       handleGenreFilter: (state , action) => {
            const uniqueGenre = action.payload;
            const genreFiltered = uniqueGenre ? state.favouriteList?.filter(item => item.genre_ids[0] === uniqueGenre) : state.favouriteList;
            state.renderList = genreFiltered;
            state.originalRenderList = genreFiltered;
            state.selectedGenre = uniqueGenre;
       },
       handleSearchFilter: (state , action) => {
        const search = action.payload.target.value;
        const searchFiltered = action.payload?state.originalRenderList?.filter(item => item.title.toLowerCase().includes(search.toLowerCase())): state.originalRenderList;
        state.renderList = searchFiltered;
       },
       handleDelete:(state , action) => {
         const itemToRemove = action.payload;
          state.renderList = state.renderList.filter(item => item.id!==itemToRemove.id);
          state.originalRenderList = state.originalRenderList.filter(item => item.id!==itemToRemove.id);
          state.favouriteList = state.favouriteList.filter(item => item.id!==itemToRemove.id);
       }
       
    }
})

export const {handleGenreFilter , handleSearchFilter , setGenreList , setFavouriteList , handleDelete} = favouritesReducerSlice.actions;
export default favouritesReducerSlice.reducer;