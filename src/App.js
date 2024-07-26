import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Main from './pages/Main';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Cube from './pages/Cube'; // Ensure the path is correct
import Fun from './pages/Fun';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fun" element={<Fun />} /> {/* Ensure this route is correctly defined */}
        </Routes>
      </div>
    </>
  );
}

export default App;