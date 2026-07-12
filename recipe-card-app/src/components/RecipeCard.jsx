function RecipeCard({ recipe }) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {recipe.name}
        </h2>

        <div className="flex justify-between items-center mb-5">

          <div className="flex items-center gap-2 text-gray-600">
            <span>⏱️</span>
            <span>{recipe.time}</span>
          </div>

          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${difficultyColor[recipe.difficulty]}`}
          >
            {recipe.difficulty}
          </span>

        </div>

        <h3 className="text-lg font-semibold text-orange-600 mb-3">
          Ingredients
        </h3>

        <ul className="space-y-2">

          {recipe.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
              <span className="text-green-600">✔</span>
              {ingredient}
            </li>
          ))}

        </ul>

        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300">
          View Recipe →
        </button>

      </div>

    </div>
  );
}

export default RecipeCard;