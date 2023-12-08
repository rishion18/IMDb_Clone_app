import React from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {setFavList} from '../store/MovieGridReducer';

function MovieGrid() {

  const { activePage, fetchMemo } = useSelector((state) => state.BannerSlider);

const dispatch = useDispatch();

  return (
    <div className='movieGridContainer'>
        {
            fetchMemo[activePage]?.map((item) => {
               return (
                <div className='gridMovieItemWrap'>                
                  <div key={item.id} className='gridMovieItem'>
                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt='poster'></img>
                  </div>
                  <div className='fav'>
                    <button  onClick={() => {dispatch(setFavList(item))}} className='fav-button'>Add to favourites</button>
                  </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default MovieGrid