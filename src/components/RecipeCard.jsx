import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function RecipeCard({
  recipe,
  favorites,
  toggleFavorite,
}) {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">

      {/* Recipe Image */}
      <div className="relative overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />

        {/* Rating */}
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-yellow-600">
          ⭐ {recipe.rating}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(recipe.id)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition duration-300 cursor-pointer"
        >
          <Heart
            size={22}
            fill={isFavorite ? "#ef4444" : "none"}
            className={
              isFavorite
                ? "text-red-500"
                : "text-gray-500 hover:text-red-500 transition"
            }
          />
        </button>

      </div>

      {/* Card Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800">
          {recipe.name}
        </h2>

        <p className="text-orange-600 font-medium mt-2">
          {recipe.category}
        </p>

        {/* Information */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <div className="bg-orange-50 rounded-xl p-3 text-center">

            <p className="text-xl">⏱</p>

            <p className="text-sm text-gray-500">
              Time
            </p>

            <p className="font-semibold">
              {recipe.time}
            </p>

          </div>

          <div className="bg-red-50 rounded-xl p-3 text-center">

            <p className="text-xl">🔥</p>

            <p className="text-sm text-gray-500">
              Calories
            </p>

            <p className="font-semibold">
              {recipe.calories} kcal
            </p>

          </div>

        </div>

        {/* Difficulty */}
        <div className="mt-5">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${difficultyColor[recipe.difficulty]}`}
          >
            {recipe.difficulty}
          </span>

        </div>

        {/* View Recipe Button */}
        <Link
          to={`/recipes/${recipe.id}`}
          className="block w-full mt-8"
        >
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition duration-300 cursor-pointer">
            View Recipe →
          </button>
        </Link>

      </div>

    </div>
  );
}

export default RecipeCard;