import './App.css';
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchList from './components/WatchList';
import Favourites from './components/favourites';
import { useState } from 'react';

function App() {

  const[favList , setFavList] = useState([]);
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<BannerSlider  setFavList={setFavList}/>}/>
          <Route path="/favourites" element={<Favourites favList={favList}/>}/>
          <Route path="/watchlist" element={<WatchList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
