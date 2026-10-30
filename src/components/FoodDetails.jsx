import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "9a145859fe6e4a77b35c7e0306bd75f9";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      SetIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1> {food.title}</h1>

        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>🕐{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👦 <strong> Serves {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? " 🥦 Vegetarian" : "🥩 Non-vegetarian"}
          </span>
          <span>{food.vegan ? " 🐂 Vegan" : ""}</span>
        </div>
        <div>
          $<span>{food.pricePerServing / 100}Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
