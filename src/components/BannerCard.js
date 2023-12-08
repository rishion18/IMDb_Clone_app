import React from 'react';
import './BannerCard.css';

function BannerCard({ movie }) {
  const backdropPath = movie.backdrop_path;
  const imageUrl = `https://image.tmdb.org/t/p/w1280${backdropPath}`;

  return (
    <div className='BannerCard'>
      <div className='card-details'>
        <div className='card-title'><h2>{movie.title}</h2></div>
        <div className='card-over'>{movie.overview}</div>
      </div>
      <img src={imageUrl} alt='backdrop_img'></img>
    </div>
  );
}

export default BannerCard;