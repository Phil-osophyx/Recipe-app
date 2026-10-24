import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foodData, SetFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} SetFoodData={SetFoodData} />
      <FoodList foodData={foodData}/>
    </div>
  );
}

export default App;
