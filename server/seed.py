from server.app import app
from server.models import db, Restaurant, Pizza, RestaurantPizza

def seed_data():
    with app.app_context():
        # Create instances of Restaurant, Pizza, and RestaurantPizza
        restaurant1 = Restaurant(name="Talisman", address="320 Ngong Road, Nairobi")
        restaurant2 = Restaurant(name="Pizza Palace", address="123 Main Street, Nairobi")
        restaurant3 = Restaurant(name="Mama Mia's", address="456 Oak Avenue, Nairobi")
        restaurant4 = Restaurant(name="Cheese Haven", address="789 Maple Street, Nairobi")
        restaurant5 = Restaurant(name="Sizzling Sausages", address="101 Pine Lane, Nairobi")
        restaurant6 = Restaurant(name="Veggie Delight", address="555 Elm Street, Nairobi")
        restaurant7 = Restaurant(name="Pasta Paradise", address="888 Birch Avenue, Nairobi")
        restaurant8 = Restaurant(name="Burger Bistro", address="222 Cedar Lane, Nairobi")
        restaurant9 = Restaurant(name="Seafood Sensation", address="777 Oak Street, Nairobi")
        restaurant10 = Restaurant(name="Taco Town", address="333 Pine Avenue, Nairobi")
        restaurant11 = Restaurant(name="Kenyan Flavors", address="444 Maple Lane, Nairobi")
        restaurant12 = Restaurant(name="Safari Grill", address="666 Elm Avenue, Nairobi")
        restaurant13 = Restaurant(name="Spice Delight", address="999 Oak Street, Nairobi")
        restaurant14 = Restaurant(name="Chapati House", address="567 Pine Avenue, Nairobi")
        restaurant15 = Restaurant(name="Nairobi Grill", address="345 Maple Lane, Nairobi")

        pizza1 = Pizza(name="Margherita", ingredients="Tomato, Mozzarella, Basil")
        pizza2 = Pizza(name="Pepperoni", ingredients="Pepperoni, Cheese, Tomato Sauce")
        pizza3 = Pizza(name="Vegetarian", ingredients="Mushrooms, Bell Peppers, Onion, Olives")
        pizza4 = Pizza(name="Hawaiian", ingredients="Ham, Pineapple, Cheese, Tomato Sauce")
        pizza5 = Pizza(name="Supreme", ingredients="Sausage, Mushrooms, Bell Peppers, Olives, Onion")
        pizza6 = Pizza(name="BBQ Chicken", ingredients="Chicken, BBQ Sauce, Red Onion, Cilantro")
        pizza7 = Pizza(name="Margarita", ingredients="Tomato, Mozzarella, Basil, Olive Oil")
        pizza8 = Pizza(name="Meat Lovers", ingredients="Bacon, Sausage, Pepperoni, Ham, Cheese")
        pizza9 = Pizza(name="Four Cheese", ingredients="Mozzarella, Cheddar, Parmesan, Gouda")
        pizza10 = Pizza(name="Chicken Alfredo", ingredients="Grilled Chicken, Alfredo Sauce, Broccoli")

        
        restaurant_pizza1 = RestaurantPizza(price=10.99, pizza=pizza1, restaurant=restaurant1)
        restaurant_pizza2 = RestaurantPizza(price=12.99, pizza=pizza1, restaurant=restaurant2)
        restaurant_pizza3 = RestaurantPizza(price=14.99, pizza=pizza2, restaurant=restaurant1)
        restaurant_pizza4 = RestaurantPizza(price=15.99, pizza=pizza3, restaurant=restaurant2)
        restaurant_pizza5 = RestaurantPizza(price=18.99, pizza=pizza4, restaurant=restaurant3)
        restaurant_pizza6 = RestaurantPizza(price=16.99, pizza=pizza5, restaurant=restaurant4)
        restaurant_pizza7 = RestaurantPizza(price=20.99, pizza=pizza6, restaurant=restaurant1)
        restaurant_pizza8 = RestaurantPizza(price=17.99, pizza=pizza7, restaurant=restaurant2)
        restaurant_pizza9 = RestaurantPizza(price=19.99, pizza=pizza8, restaurant=restaurant13)
        restaurant_pizza10 = RestaurantPizza(price=21.99, pizza=pizza9, restaurant=restaurant14)
        restaurant_pizza11 = RestaurantPizza(price=23.99, pizza=pizza10, restaurant=restaurant15)

        # Add instances to the session and commit
        db.session.add_all([
            restaurant1, restaurant2, restaurant3, restaurant4, restaurant5,
            restaurant6, restaurant7, restaurant8, restaurant9, restaurant10,
            restaurant11, restaurant12, restaurant13, restaurant14, restaurant15,
            pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, pizza10,
            restaurant_pizza1, restaurant_pizza2, restaurant_pizza3,
            restaurant_pizza4, restaurant_pizza5, restaurant_pizza6,
            restaurant_pizza7, restaurant_pizza8, restaurant_pizza9,
            restaurant_pizza10, restaurant_pizza11
        ])
        db.session.commit()

if __name__ == "__main__":
    seed_data()
