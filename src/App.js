import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/Navbar';
import Navigations from './components/Navigations';
import IndonesiaPage from './pages/IndonesiaPage';
import ProgrammingPage from './pages/ProgrammingPage';
import CovidPage from './pages/CovidPage';
import SavedPage from './pages/SavedPage';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Navigations />
      <Routes>
        <Route path="/" element={<Navigate to="/indonesia" />} />
        <Route path="/indonesia" element={<IndonesiaPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/search/*" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
