import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/Homepage';
import ShowStories from './components/ShowStories';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to="/top" />} />
        <Route path='/:type' element={<ShowStories />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pageNotFound" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
