
export default function FoodItem({food}) {
  return (
    <div>
        <img src={food.strMealThumb} alt="" />
      <h1>{food.strMeal}</h1>
      <button>View Recipe</button>
    </div>
  );
}
