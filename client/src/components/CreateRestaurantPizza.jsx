import React, { useState } from 'react';
import axios from 'axios';
import './CreateRestaurantPizza.css'; 

const CreateRestaurantPizza = () => {
  const initialFormData = {
    price: 0,
    pizza_id: 0,
    restaurant_id: 0
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const [pizzaData, setPizzaData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation check
    if (formData.price === 0 || formData.pizza_id === 0 || formData.restaurant_id === 0) {
      alert('All fields are required.'); 
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/restaurant_pizzas', formData);

      // Handle successful response
      setPizzaData(response.data);
      alert('Restaurant Pizza posted successfully!');

      // Reset form fields
      setFormData(initialFormData);
    } catch (error) {
      // Handle validation errors
      if (error.response && error.response.data && error.response.data.errors) {
        const validationErrors = error.response.data.errors.join('\n');
        alert(`Validation Errors:\n${validationErrors}`);
      } else {
        console.error('Error creating RestaurantPizza:', error);
      }
    }
  };

  return (
    <div>
      <h1 className='create-title'>Create Restaurant Pizza</h1>
      <div className='form-response'>
      <form onSubmit={handleSubmit} className='form-data'>
        <label>
          Price:
          <input type="number" name="price" value={formData.price}  onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Pizza ID:
          <input
            type="number"
            name="pizza_id"
            value={formData.pizza_id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Restaurant ID:
          <input
            type="number"
            name="restaurant_id"
            value={formData.restaurant_id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Create Restaurant Pizza</button>
      </form>
      {pizzaData && (
        <div>
          <h2>Created Pizza:</h2>
          <p>ID: {pizzaData.id}</p>
          <p>Name: {pizzaData.name}</p>
          <p>Ingredients: {pizzaData.ingredients}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default CreateRestaurantPizza;
