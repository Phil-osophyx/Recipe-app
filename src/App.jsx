import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css"

function App() {
  const [foodData, SetFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} SetFoodData={SetFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
