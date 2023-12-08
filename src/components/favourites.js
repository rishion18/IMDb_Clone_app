import React from 'react';
import '../App.css';
import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setGenreList , handleGenreFilter , handleSearchFilter, setFavouriteList , handleDelete} from '../store/FavouritesReducer';
import { deleteInMain } from '../store/MovieGridReducer';

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
const Favourites = () => {

    const{renderList , genreList , selectedGenre} = useSelector(store => store.Favourites);
    const{favList} = useSelector(store => store.MovieGrid);
   
    const dispatch = useDispatch();
    dispatch(setFavouriteList(favList));


    useEffect(() => {
        dispatch(setGenreList(favList));
    } ,[favList])

    useEffect(() => {
        dispatch(handleGenreFilter(null));
    } , [])



  return(
    <div className='favourites'>
        <div className='fav-container'>
            <div className='genreFilter'>
                <ul>
                  <li className={selectedGenre === null?"selected":""} onClick={() => {dispatch(handleGenreFilter(null))}}>All Genre</li>
                    {
                       genreList?.map((uniqueGenre) => {
                        return(<li className={selectedGenre === uniqueGenre?"selected":""} onClick={() =>{dispatch(handleGenreFilter(uniqueGenre))}}>{genreids[uniqueGenre]}</li>)
                       })
                    }
                </ul>
            </div>
            <div className='favTableWrap'>
            <div><input placeholder='Search by title' type='text' onChange={(e) => {dispatch(handleSearchFilter(e))}}></input></div>
                <table className='favTable'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Popularity</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderList.length>0?renderList.map((item) => {
                                return(<tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w92${item.poster_path}`} alt="poster"></img></td>
                                    <td>{item.title}</td>
                                    <td>{genreids[item.genre_ids[0]]}</td>
                                    <td>{item.vote_count}</td>
                                    <td>{item.vote_average}</td>
                                    <td><button onClick={() => { dispatch(handleDelete(item))
                                                                 dispatch(deleteInMain(item)) 
                                    }}>Delete</button></td>
                                </tr>)}) : (<div className='noItem'>No items here</div>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default Favourites;