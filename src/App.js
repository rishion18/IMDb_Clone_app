import './App.css';
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchList from './components/WatchList';
import Favourites from './components/favourites';

function App() {

  return (
    <div className="main-container">
      <BrowserRouter>
        <Header/>
        {/* <ContextProvider> */}
        <Routes>
          <Route path="/" element={<BannerSlider/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/watchlist" element={<WatchList/>}/>
        </Routes>
        {/* </ContextProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
