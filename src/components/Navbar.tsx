import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ps-3">
      <Link className="navbar-brand" to="/">
        TV Shows
      </Link>
    </nav>
  );
};

export default Navbar;
