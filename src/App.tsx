import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './components/ShowDetails';
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/shows/:id" element={<ShowDetails name="" summary="" language="" premiered="" image={{ medium: '', original: '' }} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
