import React from 'react';
import './BannerCard.css';

function BannerCard({ backdropPath }) {
  const imageUrl = `https://image.tmdb.org/t/p/w1280${backdropPath}`;

  return (
    <div className='BannerCard'>
      <img src={imageUrl} alt='backdrop_img'></img>
    </div>
  );
}

export default BannerCard;