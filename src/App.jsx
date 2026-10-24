import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, SetFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} SetFoodData={SetFoodData} />
      git 
    </div>
  );
}

export default App;
