import React, { useState, useEffect } from 'react';
import './BannerSlider.css';
import BannerCard from './BannerCard';
import MovieGrid from './MovieGrid';
import Pagination from './pagination';


const BannerSlider = ({setFavList}) => {
    const [moviesData, setMoviesData] = useState([]);
  let box = document.querySelector('.CardContainer');

  

  const handlePrevClick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const handleNextClick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };


  const fetchData = (page = 1) =>{
    const apiKey = `c8379e85d867307b4c6117b80eeefaa4&page=${page}`;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMoviesData(data.results);
    })
  }
  

useEffect(() => {
  fetchData();
} , []) // Empty dependency array to ensure the effect runs only once


  return (
    <div className='BannerContainer'>
      <div className='BannerWindow'>
        <div className='prev-button' onClick={handlePrevClick}></div>
        <div className='next-button' onClick={handleNextClick}></div>
        <div className='CardContainer'>
          {moviesData.map(movie => (
            <BannerCard key={movie.id} backdropPath={movie.backdrop_path} />
          ))}
        </div>
      </div>
      <div className='gridContainer'>
        <MovieGrid pageData ={moviesData} setFavList={setFavList}/>
      </div>
      <div className='paginationWrap'>
        <Pagination totalPages={moviesData?.total_pages}  fetchData={fetchData}/>
      </div>
    </div>
  );
};

export default BannerSlider;