function RecipeDetails({ recipe, goBack }) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100 py-10">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">

          <button
            onClick={goBack}
            className="mb-6 text-orange-600 font-semibold hover:underline cursor-pointer"
          >
            ← Back to Recipes
          </button>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {recipe.name}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6">

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
              ⭐ {recipe.rating}
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              ⏱ {recipe.time}
            </span>

            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
              🔥 {recipe.calories} kcal
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
              🍽 Serves {recipe.servings}
            </span>

            <span
              className={`px-4 py-2 rounded-full font-semibold ${difficultyColor[recipe.difficulty]}`}
            >
              {recipe.difficulty}
            </span>

          </div>

          <h2 className="text-2xl font-bold text-orange-600 mb-3">
            Ingredients
          </h2>

          <ul className="space-y-2 mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="text-gray-700"
              >
                ✔ {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-orange-600 mb-3">
            Cooking Steps
          </h2>

          <ol className="list-decimal ml-6 space-y-3 text-gray-700">
            {recipe.steps.map((step, index) => (
              <li key={index}>
                {step}
              </li>
            ))}
          </ol>

        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;