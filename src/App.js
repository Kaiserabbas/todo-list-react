import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import './App.css';

function App() {
  return (
    <>
      <nav className="nav-list">
        <h1 className="title">Math Magician</h1>
        <Link className="nav" to="/">
          Home
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
