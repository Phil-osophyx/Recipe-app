
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData,SetFoodData]=useState([])
  return <div className="App">
    <Search foodData={foodData} SetFoodData={SetFoodData}/> 
    {foodData.map((food)=><h1>{food.title}</h1>)} 
  </div>;
}

export default App;
