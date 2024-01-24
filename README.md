# Pizza Restaurants App
This is a full-stack web application for managing pizza restaurants. The application allows users to view a list of restaurants, see details of a specific restaurant, view available pizzas, and create new restaurant-pizza associations.

## Technologies Used
1. Frontend:

 - React
 - Axios for API requests
 - react-router-dom for routing

2. Backend:

 - Flask (Python)
 - Flask-RESTful for creating RESTful APIs
 - Flask-CORS for handling Cross-Origin Resource Sharing
 - Flask-Migrate for database migrations
 - SQLAlchemy for interacting with the database
## Frontend Structure
The frontend of the application is built using React. Key components include:

- `App`: The main component that sets up the routing using react-router-dom.
- `NavBar`: Navigation bar with links to different sections of the application.
- `Restaurants`: Displays a list of restaurants and allows users to click on a restaurant to view details.
- `RestaurantDetail`: Displays details of a specific restaurant, including its name, address, and associated pizzas. Users can also delete the restaurant.
- `Pizza`: Displays a list of available pizzas.
- `CreateRestaurantPizza`: Allows users to create new associations between a restaurant and a pizza.
## Frontend Styling
Styling is implemented using CSS. Different CSS files are used to style individual components, ensuring a clean and organized structure.

## Backend Structure
The backend is built using Flask, a web framework for Python. Key components include:

- `app.py`: The main application file containing routes and configuration.
- `models.py`: Defines the database models using SQLAlchemy, including Restaurant, Pizza, and RestaurantPizza.
- `migrations`: Directory containing migration files for database changes.
- `seed.py`: Script for seeding initial data into the database.

## Backend API Endpoints
- `/restaurants`:
  - GET: Fetches a list of all restaurants.
-` /restaurants/<int:id>`:
  - GET: Fetches details of a specific restaurant.
  - DELETE: Deletes a specific restaurant.
- `/pizzas`:
  - GET: Fetches a list of all available pizzas.
- `/restaurant_pizzas`:
  - POST: Creates a new association between a restaurant and a pizza.
## How to Run
1. Backend Setup:

- Navigate to the `backend ` directory.
- Run `pip install -r requirements.txt` to install the required Python packages.
- Run `python app.py` to start the Flask server.

2. Frontend Setup:

- Navigate to the `frontend` directory.
- Run `npm install` to install the required npm packages.
- Run `npm run dev` to start the React development server.

3. Open your browser and navigate to `http://localhost:5173`to use the application.

Feel free to explore the application, view restaurant details, create new restaurant-pizza associations, and more!