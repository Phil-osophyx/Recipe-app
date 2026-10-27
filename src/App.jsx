import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css"
import Container from "./components/Container";

function App() {
  const [foodData, SetFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} SetFoodData={SetFoodData} />
      <Container>
     <FoodList foodData={foodData} /> 
      </Container>
     
    </div>
  );
}

export default App;
