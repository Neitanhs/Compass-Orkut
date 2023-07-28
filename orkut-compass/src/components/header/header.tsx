import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLogin from './headerLogin';
import HeaderProfile from './headerProfile';

const Header: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderLogin />} />
        <Route path="/profile" element={<HeaderProfile />} />
      </Routes>
    </Router>
  );
};

export default Header;