function RecipeCard({ recipe }) {

  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700"
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {recipe.name}
        </h2>

        <div className="flex justify-between items-center mb-5">

          <span className="text-gray-600">
            ⏱ {recipe.time}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColor[recipe.difficulty]}`}
          >
            {recipe.difficulty}
          </span>

        </div>

        <h3 className="font-semibold text-lg mb-2 text-orange-700">
          Ingredients
        </h3>

        <ul className="space-y-2">

          {recipe.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700"
            >
                {ingredient}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}

export default RecipeCard;