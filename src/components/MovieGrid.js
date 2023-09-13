import React from 'react'
import '../App.css';

function MovieGrid({pageData , setFavList}) {


  const handleFavButtonClick = (item) => {
    setFavList((prevArray) => [...prevArray, item]);
  }
  

  return (
    <div className='movieGridContainer'>
        {
            pageData.map((item) => {
               return (
                <div className='gridMovieItemWrap'>                
                  <div key={item.id} className='gridMovieItem'>
                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt='poster'></img>
                  </div>
                  <div className='fav'>
                    <button onClick={() => {handleFavButtonClick(item)}} className='fav-button'>Add to favourites</button>
                  </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default MovieGrid