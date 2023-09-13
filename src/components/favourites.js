import React from 'react';
import '../App.css';
import {useState , useEffect} from 'react';

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
const Favourites = ({favList}) => {

    const[genreList , setGenreList] = useState([]);
    const[favListModify , setFavListModify] = useState(favList);
    const[selectedGenre , setSelectedGenre] = useState(null);
    const[searchFavList , setSearchFavList] = useState(favListModify);

    useEffect(() => {
        const genre = Array.from(new Set(favList.map(favourite => favourite.genre_ids[0])));
        setGenreList(genre);
    } ,[favList])

    function handleGenreFilter(uniqueGenre) {
        setFavListModify(() => {
            const genreFiltered = uniqueGenre ? favList.filter(item => item.genre_ids[0] === uniqueGenre) : favList;
            setSearchFavList(genreFiltered);
            return genreFiltered;
          });
       
        setSelectedGenre(uniqueGenre);
      }
      
      function handleSearchFilter(e){
        setSearchFavList(() => {
            const search = e.target.value;
            const searchFiltered = e? favListModify.filter(item => item.title.toLowerCase().includes(search.toLowerCase())): favListModify;
            return searchFiltered;
        })
    }

  return(
    <div className='favourites'>
        <div className='fav-container'>
            <div className='genreFilter'>
                <ul>
                  <li className={selectedGenre === null?"selected":""} onClick={() => {handleGenreFilter(null)}}>All Genre</li>
                    {
                       genreList?.map((uniqueGenre) => {
                        return(<li className={selectedGenre === uniqueGenre?"selected":""} onClick={() =>{handleGenreFilter(uniqueGenre)}}>{genreids[uniqueGenre]}</li>)
                       })
                    }
                </ul>
            </div>
            <div className='favTableWrap'>
            <div><input placeholder='Search by title' type='text' onChange={(e) => {handleSearchFilter(e)}}></input></div>
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
                            searchFavList?.map((item) => {
                                return(<tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w92${item.poster_path}`} alt="poster"></img></td>
                                    <td>{item.title}</td>
                                    <td>{genreids[item.genre_ids[0]]}</td>
                                    <td>{item.vote_count}</td>
                                    <td>{item.vote_average}</td>
                                    <td><button>Delete</button></td>
                                </tr>)})
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default Favourites;