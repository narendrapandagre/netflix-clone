import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import Search from './pages/Search/Search';
import Mylist from './pages/MyList/Mylist';

const App = () => {
  return (
    <BrowserRouter basename="/netflix-clone">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mylist" element={<Mylist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
