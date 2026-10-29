import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food,setFood]=useState({})
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "9a145859fe6e4a77b35c7e0306bd75f9";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data)
      setFood(data)
    }
    fetchFood()
  }, [foodId]);
  return <div>Food Details {foodId}
  {food.title}
  <img src={food.image} alt="" /> 
  </div>;
}
