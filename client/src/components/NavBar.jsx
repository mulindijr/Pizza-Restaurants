import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/pizza">Pizza</Link></li>
        <li><Link to="/create-restaurant-pizza">Restaurant Pizza</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
