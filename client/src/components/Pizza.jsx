import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Pizza.css'

function Pizza() {
  const [pizzas, setPizzas] = useState([])

  useEffect(()=>{
    axios('http://127.0.0.1:5000/pizzas')
    .then(response => setPizzas(response.data))
    .catch(error => console.error('Error fetching Pizza:', error));
  })

  return (
    <>
      <div className='pizza-title'><h2>Available Pizzas</h2></div>
        <ol className='pizza-container'>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <span>{pizza.name}</span>
            <h4>- {pizza.ingredients}</h4>
          </li>
        ))}
      </ol>    
    </>
  )
}

export default Pizza