import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import RestaurantDetail from './components/RestaurantDetail';
import Restaurants from './components/Restaurants';
import CreateRestaurantPizza from './components/CreateRestaurantPizza';
import NavBar from './components/NavBar';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/create-restaurant-pizza" element={<CreateRestaurantPizza />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
    </Router>
  );
};

export default App;
