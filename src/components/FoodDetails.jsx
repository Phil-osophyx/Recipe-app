import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

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
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}> {food.title}</h1>

        <img className={styles.recipeimage} src={food.image} alt="" />
        <div className={styles.recipedetails}>
          <span>
            <strong>🕐{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👦 <strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥦 Vegetarian" : "🥩 Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐂 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeinstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
