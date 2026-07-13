function RecipeDetails({ recipe, goBack }) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={goBack}
          className="mb-6 bg-white px-5 py-3 rounded-xl shadow-md hover:bg-orange-500 hover:text-white transition cursor-pointer"
        >
          ← Back to Recipes
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Image */}
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">

            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-800">
              {recipe.name}
            </h1>

            <p className="text-lg text-gray-500 mt-2">
              Authentic Nepali {recipe.category}
            </p>

            {/* Rating */}
            <div className="mt-5">
              <span className="text-yellow-500 text-2xl">
                ⭐ {recipe.rating}
              </span>
            </div>

            {/* Description */}
            <div className="mt-8">

              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                Description
              </h2>

              <p className="text-gray-700 leading-8">
                {recipe.description}
              </p>

            </div>

            {/* Quick Facts */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold text-orange-600 mb-6">
                Quick Facts
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                <div className="bg-orange-100 rounded-xl p-4 text-center">
                  <p className="text-2xl">⏱</p>
                  <p className="font-semibold">{recipe.time}</p>
                </div>

                <div className="bg-red-100 rounded-xl p-4 text-center">
                  <p className="text-2xl">🔥</p>
                  <p className="font-semibold">
                    {recipe.calories} kcal
                  </p>
                </div>

                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <p className="text-2xl">🍽</p>
                  <p className="font-semibold">
                    Serves {recipe.servings}
                  </p>
                </div>

                <div className="bg-blue-100 rounded-xl p-4 text-center">
                  <p className="text-2xl">🥟</p>
                  <p className="font-semibold">
                    {recipe.category}
                  </p>
                </div>

                <div
                  className={`rounded-xl p-4 text-center ${difficultyColor[recipe.difficulty]}`}
                >
                  <p className="text-2xl">🏷</p>
                  <p className="font-semibold">
                    {recipe.difficulty}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;