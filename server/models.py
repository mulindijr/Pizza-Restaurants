from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Restaurant(db.Model):
    __tablename__ = 'restaurant'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    pizzas = db.relationship('Pizza', secondary='restaurant_pizza', back_populates='restaurants', lazy=True)
    restaurant_pizzas = db.relationship('RestaurantPizza', back_populates='restaurant', overlaps="pizzas", lazy=True)

class Pizza(db.Model):
    __tablename__ = 'pizza'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    ingredients = db.Column(db.String(255), nullable=False)
    restaurant_pizzas = db.relationship('RestaurantPizza', back_populates='pizza', overlaps="pizzas", lazy=True)
    restaurants = db.relationship('Restaurant', secondary='restaurant_pizza', back_populates='pizzas', overlaps="restaurant_pizzas", lazy=True)

class RestaurantPizza(db.Model):
    __tablename__ = 'restaurant_pizza'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float, nullable=False)
    pizza_id = db.Column(db.Integer, db.ForeignKey('pizza.id'), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    pizza = db.relationship('Pizza', back_populates='restaurant_pizzas', overlaps="pizzas,restaurants", lazy=True)
    restaurant = db.relationship('Restaurant', back_populates='restaurant_pizzas', overlaps="pizzas,restaurants", lazy=True)

    # Validation
    @validates('price')
    def validate_price(self, key, value):
        if not (1 <= value <= 30):
            raise ValueError("Price must be between 1 and 30.")
        return value

