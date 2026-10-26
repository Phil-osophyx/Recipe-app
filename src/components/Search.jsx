import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9a145859fe6e4a77b35c7e0306bd75f9";

export default function Search({ foodData, SetFoodData }) {
  const [query, Setquery] = useState("pizza");
  useEffect(() => {
  async function fetchFood() {
    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data.results);
    SetFoodData(data.results);
  }

  fetchFood();
}, [query, SetFoodData]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => Setquery(e.target.value)}
        type="text"
      />
    </div>
  );
} 