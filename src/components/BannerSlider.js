import React, { useEffect } from 'react';
import './BannerSlider.css';
import BannerCard from './BannerCard';
import MovieGrid from './MovieGrid';
import Pagination from './pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, setFetchMemo } from '../store/BannerSliderReducer';


const BannerSlider = () => {
  let box = document.querySelector('.CardContainer');

  

  const handlePrevClick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const handleNextClick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  const { activePage, fetchMemo } = useSelector((state) => state.BannerSlider);


  const dispatch = useDispatch();

  const fetchData = (page = 1) =>{
    dispatch(setActivePage(page));
    const fetchMemoData = fetchMemo[page];
    if(fetchMemoData){
     return;
    }else{
      const apiKey = `c8379e85d867307b4c6117b80eeefaa4&page=${page}`;
      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;    
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(setFetchMemo(data.results));
 })
    }
    
  }
  

useEffect(() => {
  fetchData();
} , []) // Empty dependency array to ensure the effect runs only once


  return (
    <div className='BannerContainer'>
      <div className='BannerWindow'>

        <div className='CardContainer'>
        <div className='prev-button' onClick={handlePrevClick}></div>
        <div className='next-button' onClick={handleNextClick}></div>
          {fetchMemo[activePage]?.map(movie => (
            <BannerCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className='gridContainer'>
        <MovieGrid pageData ={fetchMemo[activePage]}/>
      </div>
      <div className='paginationWrap'>
        <Pagination totalPages={fetchMemo[activePage]?.total_pages}  fetchData={fetchData}/>
      </div>
    </div>
  );
};

export default BannerSlider;