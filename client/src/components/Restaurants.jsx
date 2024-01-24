import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Restaurants.css';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();  // Use useNavigate for programmatic navigation

  useEffect(() => {
    fetch('http://127.0.0.1:5000/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  const handleButtonClick = (restaurantId) => {
    // Use navigate to navigate to the restaurant detail page
    navigate(`/restaurants/${restaurantId}`);
  };

  return (
    <div className='restaurants'>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <button onClick={() => handleButtonClick(restaurant.id)}>
              {restaurant.name} - {restaurant.address}
            </button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
