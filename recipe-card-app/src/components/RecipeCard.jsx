function RecipeCard({ recipe, onViewRecipe }) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-60 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {recipe.name}
        </h2>

        <div className="flex justify-between items-center mb-3">

          <span className="font-semibold text-yellow-500">
            ⭐ {recipe.rating}
          </span>

          <span className="text-gray-600">
            ⏱ {recipe.time}
          </span>

        </div>

        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${difficultyColor[recipe.difficulty]}`}
        >
          {recipe.difficulty}
        </span>

        <button
          onClick={() => onViewRecipe(recipe)}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300 cursor-pointer"
        >
          View Recipe →
        </button>

      </div>

    </div>
  );
}

export default RecipeCard;