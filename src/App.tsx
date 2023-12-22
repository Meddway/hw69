import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './components/ShowDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shows/:id" element={<ShowDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
