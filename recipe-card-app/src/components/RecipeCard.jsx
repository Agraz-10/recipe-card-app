function RecipeCard({ recipe }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-2">
          {recipe.name}
        </h2>

        <p className="text-gray-600 mb-2">
          ⏱ Cooking Time: {recipe.time}
        </p>

        <p
          className={`font-semibold mb-3 ${
            recipe.difficulty === "Easy"
              ? "text-green-600"
              : recipe.difficulty === "Medium"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          ⭐ {recipe.difficulty}
        </p>

        <h3 className="font-semibold mb-2">
          Ingredients
        </h3>

        <ul className="list-disc ml-5 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default RecipeCard;