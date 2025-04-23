import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Movie from './components/Movie';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-slate-900 '>
        <Nav />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/project" element={<Posts />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
