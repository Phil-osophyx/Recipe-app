
import { useEffect, useState } from "react";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const API_KEY = "";

export default function Search({ foodData, SetFoodData }) {
  const [query, Setquery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}${query}`);
      const data = await res.json();
      console.log(data.meals);
      SetFoodData(data.meals);
    }
    fetchFood();
  }, [query]);
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
