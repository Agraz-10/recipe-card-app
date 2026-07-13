import { Link } from "react-router-dom";

function RecipeDetails({ recipe }) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="flex gapp-6 mb-6">
          <Link to="/" className="text-orange-600 font-semibold hover:underline">
            ← Home
          </Link>

          <Link to="/recipes" className="text-orange-600 font-semibold hover:underline">
            ← All Recipes
          </Link>
        </div>

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

            <p className="text-xl text-gray-500 mt-2">
              Authentic Nepali {recipe.category}
            </p>

            {/* Rating */}
            <div className="mt-5 text-2xl text-yellow-500 font-semibold">
              ⭐ {recipe.rating} / 5
            </div>

            {/* Description */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                Description
              </h2>

              <p className="text-gray-700 leading-8">
                {recipe.description}
              </p>
            </section>

            {/* Quick Facts */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-5">
                Quick Facts
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                <div className="bg-orange-100 rounded-xl p-4 text-center">
                  <p className="text-3xl">⏱</p>
                  <h3 className="font-bold mt-2">Time</h3>
                  <p>{recipe.time}</p>
                </div>

                <div className="bg-red-100 rounded-xl p-4 text-center">
                  <p className="text-3xl">🔥</p>
                  <h3 className="font-bold mt-2">Calories</h3>
                  <p>{recipe.calories} kcal</p>
                </div>

                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <p className="text-3xl">🍽</p>
                  <h3 className="font-bold mt-2">Servings</h3>
                  <p>{recipe.servings}</p>
                </div>

                <div className="bg-blue-100 rounded-xl p-4 text-center">
                  <p className="text-3xl">🥟</p>
                  <h3 className="font-bold mt-2">Category</h3>
                  <p>{recipe.category}</p>
                </div>

                <div className={`rounded-xl p-4 text-center ${difficultyColor[recipe.difficulty]}`}>
                  <p className="text-3xl">🏷</p>
                  <h3 className="font-bold mt-2">Difficulty</h3>
                  <p>{recipe.difficulty}</p>
                </div>

              </div>
            </section>

            {/* Ingredients */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-5">
                Ingredients
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 border border-orange-200 rounded-xl p-4"
                  >
                    ✔ {ingredient}
                  </div>
                ))}
              </div>
            </section>

            {/* Equipment */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-5">
                Equipment Needed
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recipe.equipment.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-xl p-4 text-center shadow"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Cooking Steps */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-5">
                How to Prepare
              </h2>

              <div className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 bg-orange-50 rounded-xl p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <p className="text-gray-700">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tips */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-5">
                Cooking Tips
              </h2>

              <div className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4"
                  >
                    💡 {tip}
                  </div>
                ))}
              </div>
            </section>

            {/* Nutrition */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-5">
                Nutrition Facts
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                <div className="bg-red-100 rounded-xl p-5 text-center">
                  <h3 className="font-bold">Calories</h3>
                  <p>{recipe.calories} kcal</p>
                </div>

                <div className="bg-green-100 rounded-xl p-5 text-center">
                  <h3 className="font-bold">Protein</h3>
                  <p>{recipe.protein}</p>
                </div>

                <div className="bg-blue-100 rounded-xl p-5 text-center">
                  <h3 className="font-bold">Carbohydrates</h3>
                  <p>{recipe.carbohydrates}</p>
                </div>

                <div className="bg-yellow-100 rounded-xl p-5 text-center">
                  <h3 className="font-bold">Fat</h3>
                  <p>{recipe.fat}</p>
                </div>

              </div>
            </section>

            {/* Footer */}
            <div className="mt-16 border-t pt-8 text-center">

              <h2 className="text-3xl font-bold text-orange-600">
                Enjoy Your Meal!
              </h2>

              <p className="text-gray-600 mt-3">
                We hope this traditional Nepali recipe brings authentic flavors to your kitchen. Happy cooking!
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;