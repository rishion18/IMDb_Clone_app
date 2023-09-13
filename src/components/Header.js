import './imdbHeader.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="Header">
           <div className='Header-wrap'>
                <div className='logo-wrap'>
                    <img className="logo" src='https://upload.wikimedia.org/wikipedia/commons/5/57/IMDb_Logo_Rectangle.svg' alt="logo"></img>
                    <input placeholder='find'></input>
                    <button>find</button>
                </div>
                <div className='router-wrap'>
                    <div><Link className="link" to="/">Home</Link></div>
                    <div><Link className="link" to="/favourites">Favourites</Link></div>
                    <div><Link className="link" to="/WatchList">watchlist</Link></div>
                </div>
           </div>
        </div>
    )
}

export default Header;