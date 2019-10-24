import React from 'react';
import NavbarVertical from './components/NavbarVertical/index'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './style.css'
// import MySeries from './pages/MySeries/index'
// import FavoritesList from './pages/FavoritesList/index'
// import Watching from './pages/Watching/index'

const MySeries = () => {
  return (
    <div className="content">
      <div className="text-title">My Series</div>
      <div className="sub-title">Page 1/3</div>
    </div>
  )
}

const FavoritesList = () => {
  return (
    <div className="content">
      <div className="text-title">Favorites List</div>
      <div className="sub-title">Page 2/3</div>
    </div>
  )
}

const Watching = () => {
  return (
    <div className="content">
      <div className="text-title">Watching</div>
      <div className="sub-title">Page 3/3</div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="navHeader">
      <Link className="navItem" to={'/'}>My Series</Link>
      <Link className="navItem" to={'/favorites-list'}>Favorites List</Link>
      <Link className="navItem" to={'/watching'}>Watching</Link>
    </div>
  )
}

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={MySeries} />
        <Route path='/favorites-list' exact component={FavoritesList} />
        <Route path='/watching' exact component={Watching} />
      </div>
    </Router>
  )
}
          
export default App
