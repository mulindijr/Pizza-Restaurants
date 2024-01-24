import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantDetail.css';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/restaurants/${id}`)
      .then(response => setRestaurant(response.data))
      .catch(error => {
        console.error('Error fetching restaurant details:', error);
        // Handle the error as needed, e.g., set an error state
      });
  }, [id]);

  const handleDeleteRestaurant = () => {
    axios.delete(`http://127.0.0.1:5000/restaurants/${id}`)
      .then(response => {
        console.log('Restaurant deleted successfully:', response.data);
        navigate('/'); // Navigate back to the list of restaurants after deletion
        // Display alert when restaurant is deleted
        window.alert('Restaurant deleted successfully');
      })
      .catch(error => console.error('Error deleting restaurant:', error));
  };

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <h2>Pizzas:</h2>
      {restaurant.pizzas && restaurant.pizzas.length > 0 ? (
        <ul>
          {restaurant.pizzas.map(pizza => (
            <li key={pizza.id}>
              {pizza.name} - {pizza.ingredients}
            </li>
          ))}
        </ul>
      ) : (
        <p>No pizzas available.</p>
      )}
      <button className='delete-restaurant' onClick={handleDeleteRestaurant}>Delete Restaurant</button>
    </div>
  );
};

export default RestaurantDetail;
