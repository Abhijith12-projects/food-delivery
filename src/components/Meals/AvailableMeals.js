import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Authentic Hyderabadi Biryani",
    price: 299,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 350,
  },
  {
    id: "m3",
    name: "Masala Dosa",
    description: "South Indian, breakfast",
    price: 80,
  },
  {
    id: "m4",
    name: "Meals - Thali",
    description: "15+ Varieties of dishes in 1 meal",
    price: 199,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
