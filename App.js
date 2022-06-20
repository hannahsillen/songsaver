import './App.css';
import React from 'react';
import { Link, Outlet } from "react-router-dom"
import SongOverview from './components/Overview';
//import Aboutme from './components/about';
//<Link to="./components/about.html"> about me </Link>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Song Saver</h1>
      </header>
      <nav className="menu">
        <Link to="./about"> about me </Link>
      </nav>
      <Outlet/>
      <SongOverview />
    </div>
  );
}

export default App;