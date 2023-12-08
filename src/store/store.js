import { configureStore } from "@reduxjs/toolkit";
import BannerSliderReducer from "./BannerSliderReducer";
import MovieGridReducer from "./MovieGridReducer";
import FavouritesReducer from './FavouritesReducer';

export default configureStore({
    reducer:{
        BannerSlider: BannerSliderReducer,
        MovieGrid: MovieGridReducer,
        Favourites: FavouritesReducer
    }
})

